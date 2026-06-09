import { type Request, type Response } from "express";
import { ListaRegularService } from "../services/listaRegular.service.js";
import { prisma } from "../lib/prisma.js";

export class ListaRegularController {
  private listaRegularService = new ListaRegularService();

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
      const institutionId = await this.getInstitutionId(req);
      const novaEntrada = await this.listaRegularService.create(req.body, institutionId);
      res.status(201).json(novaEntrada);
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public findAll = async (req: Request, res: Response) => {
    try {
      const entradas = await this.listaRegularService.findAll(req.user);
      res.status(200).json(entradas);
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public findOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "O ID é obrigatório." });
    }
    try {
      const institutionId = await this.getInstitutionId(req);
      const entrada = await this.listaRegularService.findOne(id, institutionId);
      res.status(200).json(entrada);
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "O ID é obrigatório." });
    }
    try {
      const institutionId = await this.getInstitutionId(req);
      await this.listaRegularService.delete(id, institutionId);
      res.status(204).send();
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };
}
