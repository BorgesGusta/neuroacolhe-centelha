import { type Request, type Response } from "express";
import { ColaboradorService } from "../services/colaborador.service.js";
import { UserRole } from "@prisma/client";
import { prisma } from "../lib/prisma.js";

export class ColaboradorController {
  private colaboradorService = new ColaboradorService();

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
      const { nome, matricula, email, senha, role, data_admissao } = req.body;
      const institutionId = await this.getInstitutionId(req);

      const roleMap: Record<string, UserRole> = {
        ADMIN: UserRole.INSTITUTION_ADMIN,
        BOLSISTA: UserRole.PROFESSIONAL,
        SUPERVISOR: UserRole.SUPERVISOR,
        PROFESSIONAL: UserRole.PROFESSIONAL,
        INSTITUTION_ADMIN: UserRole.INSTITUTION_ADMIN,
        PLATFORM_ADMIN: UserRole.PLATFORM_ADMIN,
      };
      const mappedRole = roleMap[role?.toUpperCase()] || UserRole.PROFESSIONAL;

      let dataFormatada;
      if (typeof data_admissao === "string" && data_admissao.length === 10) {
        dataFormatada = new Date(data_admissao + "T12:00:00.000Z");
      } else {
        dataFormatada = new Date(data_admissao || new Date());
      }

      const novoColaborador = await this.colaboradorService.create({
        nome,
        matricula,
        email,
        senha,
        role: mappedRole,
        data_admissao: dataFormatada,
      }, institutionId);

      res.status(201).json(novoColaborador);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public findAll = async (req: Request, res: Response) => {
    try {
      const institutionId = await this.getInstitutionId(req);
      const colaboradores = await this.colaboradorService.findAll(institutionId);
      res.status(200).json(colaboradores);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public findOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ message: "O ID do colaborador é obrigatório." });
    }

    try {
      const institutionId = await this.getInstitutionId(req);
      const colaborador = await this.colaboradorService.findOne(
        id,
        institutionId
      );
      res.status(200).json(colaborador);
    } catch (error: any) {
      if (error.message === "Colaborador não encontrado.") {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ message: "O ID do colaborador é obrigatório." });
    }

    try {
      const institutionId = await this.getInstitutionId(req);

      const roleMap: Record<string, UserRole> = {
        ADMIN: UserRole.INSTITUTION_ADMIN,
        BOLSISTA: UserRole.PROFESSIONAL,
        SUPERVISOR: UserRole.SUPERVISOR,
        PROFESSIONAL: UserRole.PROFESSIONAL,
        INSTITUTION_ADMIN: UserRole.INSTITUTION_ADMIN,
        PLATFORM_ADMIN: UserRole.PLATFORM_ADMIN,
      };

      const bodyCopy = { ...req.body };
      if (bodyCopy.role) {
        bodyCopy.role = roleMap[bodyCopy.role.toUpperCase()] || UserRole.PROFESSIONAL;
      }

      const colaboradorAtualizado = await this.colaboradorService.update(
        id,
        bodyCopy,
        institutionId
      );
      res.status(200).json(colaboradorAtualizado);
    } catch (error: any) {
      if (error.message.includes("Colaborador não encontrado")) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ message: "O ID do colaborador é obrigatório." });
    }

    try {
      const institutionId = await this.getInstitutionId(req);
      await this.colaboradorService.delete(id, institutionId);
      res.status(204).send();
    } catch (error: any) {
      if (error.message === "Colaborador não encontrado.") {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };
}
