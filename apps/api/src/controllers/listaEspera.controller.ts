import { type Request, type Response } from "express";
import { ListaEsperaService } from "../services/listaEspera.service.js";

export class ListaEsperaController {
  private listaEsperaService = new ListaEsperaService();

  public create = async (req: Request, res: Response) => {
    try {
      const novaEntrada = await this.listaEsperaService.create(req.body);
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
      const listaEspera = await this.listaEsperaService.findAll();
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
      const id = parseInt(idParam, 10);
      const entrada = await this.listaEsperaService.findOne(id);
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
      const id = parseInt(idParam, 10);
      await this.listaEsperaService.delete(id);
      res.status(204).send();
    } catch (error: any) {
      if (error.message === "Entrada da lista de espera não encontrada.") {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };
}
