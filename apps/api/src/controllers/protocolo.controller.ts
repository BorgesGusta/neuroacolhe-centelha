import { type Request, type Response } from "express";
import { ProtocoloService } from "../services/protocolo.service.js";

export class ProtocoloController {
  private protocoloService = new ProtocoloService();
    public create = async (req: Request, res: Response) => {
      try {
        const novoProtocolo = await this.protocoloService.create(req.body);
        res.status(201).json(novoProtocolo);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };

    public findAll = async (req: Request, res: Response) => {
      try {
        const protocolos = await this.protocoloService.findAll();
        res.status(200).json(protocolos);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };

    public findOne = async (req: Request, res: Response) => {
      const id = Number(req.params.id);
      try {
        const protocolo = await this.protocoloService.findOne(id);
        res.status(200).json(protocolo);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };

    public update = async (req: Request, res: Response) => {
      const id = Number(req.params.id);
      try {
        const protocolo = await this.protocoloService.update(id, req.body);
        res.status(200).json(protocolo);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };

    public delete = async (req: Request, res: Response) => {
      const id = Number(req.params.id);
      try {
        await this.protocoloService.delete(id);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };
}
