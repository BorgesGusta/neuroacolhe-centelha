import { type Request, type Response } from "express";
import { PacienteService } from "../services/paciente.service.js";
import axios from "axios";
import { prisma } from "../lib/prisma.js";

export class PacienteController {
  private pacienteService = new PacienteService();

  private getInstitutionId = async (req: Request): Promise<string> => {
    if (req.user?.institutionId) {
      return req.user.institutionId;
    }
    const inst = await prisma.institution.findFirst();
    if (!inst) {
      throw new Error("Nenhuma instituição cadastrada no sistema.");
    }
    return inst.id;
  };

  public create = async (req: Request, res: Response) => {
    try {
      const { recaptchaToken, ...dadosPaciente } = req.body;

      if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY && process.env.RECAPTCHA_SECRET_KEY !== "dummy") {
        const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
        const googleResponse = await axios.post(googleVerifyUrl);
        const { success, score } = googleResponse.data;

        if (!success || score < 0.5) {
          console.warn(`Tentativa de bot bloqueada. Score: ${score}`);
          return res
            .status(403)
            .json({ message: "Acesso negado por atividade suspeita (Bot)." });
        }
      }

      const ipRaw = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
      const ip_origem = Array.isArray(ipRaw) ? ipRaw[0] : ipRaw;

      const currentDate = new Date();
      const dataBrasilia = new Date(currentDate.getTime() - 3 * 60 * 60 * 1000);

      const payloadFinal = {
        ...dadosPaciente,
        termo_lgpd: true,
        data_aceite_termo: dataBrasilia,
        ip_origem: String(ip_origem || ""),
        userAgent: req.headers["user-agent"],
      };

      const institutionId = await this.getInstitutionId(req);
      const novoPaciente = await this.pacienteService.create(payloadFinal, institutionId);
      res.status(201).json(novoPaciente);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public findAll = async (req: Request, res: Response) => {
    try {
      const institutionId = await this.getInstitutionId(req);
      const pacientes = await this.pacienteService.findAll(institutionId);
      res.status(200).json(pacientes);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public findOne = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res
          .status(400)
          .json({ message: "O ID do paciente é obrigatório." });
      }

      const institutionId = await this.getInstitutionId(req);
      const paciente = await this.pacienteService.findOne(id, institutionId);
      res.status(200).json(paciente);
    } catch (error: any) {
      if (error.message === "Paciente não encontrado.") {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res
          .status(400)
          .json({ message: "O ID do paciente é obrigatório." });
      }

      const institutionId = await this.getInstitutionId(req);
      const pacienteAtualizado = await this.pacienteService.update(
        id,
        req.body,
        institutionId
      );
      res.status(200).json(pacienteAtualizado);
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res
          .status(400)
          .json({ message: "O ID do paciente é obrigatório." });
      }

      const institutionId = await this.getInstitutionId(req);
      await this.pacienteService.delete(id, institutionId);
      res.status(204).send();
    } catch (error: any) {
      if (error.message === "Paciente não encontrado.") {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };
}
