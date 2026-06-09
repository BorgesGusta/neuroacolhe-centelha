import { type Request, type Response } from "express";
import { ProtocoloService } from "../services/protocolo.service.js";
import { prisma } from "../lib/prisma.js";

export class ProtocoloController {
  private protocoloService = new ProtocoloService();

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
      const novoProtocolo = await this.protocoloService.create(req.body, institutionId);
      res.status(201).json(novoProtocolo);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public findAll = async (req: Request, res: Response) => {
    try {
      const institutionId = await this.getInstitutionId(req);
      const protocolos = await this.protocoloService.findAll(institutionId);
      res.status(200).json(protocolos);
    } catch (error: any) {
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
      const protocolo = await this.protocoloService.findOne(id, institutionId);
      res.status(200).json(protocolo);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "O ID é obrigatório." });
    }
    try {
      const institutionId = await this.getInstitutionId(req);
      const protocolo = await this.protocoloService.update(id, req.body, institutionId);
      res.status(200).json(protocolo);
    } catch (error: any) {
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
      await this.protocoloService.delete(id, institutionId);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}
