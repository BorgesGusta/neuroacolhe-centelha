import { type Request, type Response } from "express";
import { ListaRegularService } from "../services/listaRegular.service.js";

export class ListaRegularController {
  private listaRegularService = new ListaRegularService();

  public create = async (req: Request, res: Response) => {
    try {
      const novaEntrada = await this.listaRegularService.create(req.body);
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
    const id = Number(req.params.id);
    try {
      const entrada = await this.listaRegularService.findOne(id);
      res.status(200).json(entrada);
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
      await this.listaRegularService.delete(id);
      res.status(204).send();
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };
}
