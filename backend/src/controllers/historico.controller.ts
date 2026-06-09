import { type Request, type Response } from 'express';
import { HistoricoService } from '../services/historico.service.js';
import { prisma } from '../lib/prisma.js';

export class HistoricoController {
  private historicoService = new HistoricoService();

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
      const historico = await this.historicoService.create(req.body, institutionId);
      res.status(201).json(historico);
    } catch (error: any) {
      if (error.message.includes('não encontrado')) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public findAll = async (req: Request, res: Response) => {
    try {
      const institutionId = await this.getInstitutionId(req);
      const historicos = await this.historicoService.findAll(institutionId);
      res.status(200).json(historicos);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public findOne = async (req: Request, res: Response) => {
    const idParam = req.params.id;
    if (!idParam) {
      return res.status(400).json({ message: 'ID do histórico não fornecido.' });
    }

    try {
      const institutionId = await this.getInstitutionId(req);
      const historico = await this.historicoService.findOne(idParam, institutionId);
      res.status(200).json(historico);
    } catch (error: any) {
      if (error.message === 'Registro de histórico não encontrado.') {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    const idParam = req.params.id;
    if (!idParam) {
      return res.status(400).json({ message: 'ID do histórico não fornecido.' });
    }

    try {
      const institutionId = await this.getInstitutionId(req);
      await this.historicoService.delete(idParam, institutionId);
      res.status(204).send();
    } catch (error: any) {
      if (error.message === 'Registro de histórico não encontrado.') {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };
}