import { type Request, type Response } from "express";
import { ListaEsperaService } from "../services/listaEspera.service.js";
import { prisma } from "../lib/prisma.js";

export class ListaEsperaController {
  private listaEsperaService = new ListaEsperaService();

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
      const novaEntrada = await this.listaEsperaService.create(req.body, institutionId);
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
      const institutionId = await this.getInstitutionId(req);
      const listaEspera = await this.listaEsperaService.findAll(institutionId);
      res.status(200).json(listaEspera);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public findOne = async (req: Request, res: Response) => {
    const idParam = req.params.id;

    if (!idParam) {
      return res
        .status(400)
        .json({ message: "ID da entrada não fornecido na URL." });
    }

    try {
      const institutionId = await this.getInstitutionId(req);
      const entrada = await this.listaEsperaService.findOne(idParam, institutionId);
      res.status(200).json(entrada);
    } catch (error: any) {
      if (error.message === "Entrada da lista de espera não encontrada.") {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    const idParam = req.params.id;

    if (!idParam) {
      return res
        .status(400)
        .json({ message: "ID da entrada não fornecido na URL." });
    }

    try {
      const institutionId = await this.getInstitutionId(req);
      await this.listaEsperaService.delete(idParam, institutionId);
      res.status(204).send();
    } catch (error: any) {
      if (error.message === "Entrada da lista de espera não encontrada.") {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };
}
