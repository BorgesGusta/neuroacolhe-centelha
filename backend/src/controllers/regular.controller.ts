import { type Request, type Response } from "express";
import { RegularService } from "../services/regular.service.js";
import { prisma } from "../lib/prisma.js";

export class RegularController {
  private regularService = new RegularService();

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

  async create(req: Request, res: Response) {
    const data = req.body;
    try {
      const institutionId = await this.getInstitutionId(req);
      const novoRegistro = await this.regularService.create(data, institutionId);
      return res.status(201).json(novoRegistro);
    } catch (error: any) {
      console.error("Erro ao criar registro regular:", error);
      return res.status(500).json({ error: error.message || "Erro ao criar registro regular." });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const institutionId = await this.getInstitutionId(req);
      const registros = await this.regularService.findAll(institutionId);
      return res.status(200).json(registros);
    } catch (error) {
      console.error("Erro ao buscar registros regulares:", error);
      return res
        .status(500)
        .json({ error: "Erro ao buscar registros regulares." });
    }
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "O ID é obrigatório." });
    }
    try {
      const institutionId = await this.getInstitutionId(req);
      const registro = await this.regularService.findOne(id, institutionId);
      return res.status(200).json(registro);
    } catch (error) {
      console.error("Erro ao buscar registro regular:", error);
      return res
        .status(500)
        .json({ error: "Erro ao buscar registro regular." });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
      return res.status(400).json({ error: "O ID é obrigatório." });
    }
    try {
      const institutionId = await this.getInstitutionId(req);
      const registroAtualizado = await this.regularService.update(id, data, institutionId);
      return res.status(200).json(registroAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar registro regular:", error);
      return res
        .status(500)
        .json({ error: "Erro ao atualizar registro regular." });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "O ID é obrigatório." });
    }
    try {
      const institutionId = await this.getInstitutionId(req);
      await this.regularService.delete(id, institutionId);
      return res.status(204).send();
    } catch (error) {
      console.error("Erro ao deletar registro regular:", error);
      return res
        .status(500)
        .json({ error: "Erro ao deletar registro regular." });
    }
  }
}
