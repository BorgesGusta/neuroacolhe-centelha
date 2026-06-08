import { type Request, type Response } from 'express';
import { HistoricoService } from '../services/historico.service.js';

export class HistoricoController {
  private historicoService = new HistoricoService();

  public create = async (req: Request, res: Response) => {
    try {
      const historico = await this.historicoService.create(req.body);
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
      const historicos = await this.historicoService.findAll();
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
      const id = parseInt(idParam, 10);
      const historico = await this.historicoService.findOne(id);
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
      const id = parseInt(idParam, 10);
      await this.historicoService.delete(id);
      res.status(204).send();
    } catch (error: any) {
      if (error.message === 'Registro de histórico não encontrado.') {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };
}