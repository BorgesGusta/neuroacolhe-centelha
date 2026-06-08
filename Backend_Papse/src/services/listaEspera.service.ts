import { prisma } from "../lib/prisma.js";

export interface CreateListaEsperaDto {
  idPaciente: number;
}

export class ListaEsperaService {
  async create(data: CreateListaEsperaDto) {
    try {
      await prisma.paciente.findUniqueOrThrow({
        where: { idPaciente: data.idPaciente },
      });

      const entradaListaEspera = await prisma.listaEspera.create({
        data: {
          idPaciente: data.idPaciente,
        },
        include: {
          paciente: true,
        },
      });
      return entradaListaEspera;
    } catch (error: any) {
      if (
        error.code === "P2025" ||
        error.message.includes("Paciente não encontrado")
      ) {
        throw new Error(`Paciente com ID ${data.idPaciente} não encontrado.`);
      }
      console.error("Erro ao adicionar paciente à lista de espera:", error);
      throw new Error(
        "Não foi possível adicionar o paciente à lista de espera."
      );
    }
  }

  async findAll() {
    try {
      const listaEspera = await prisma.listaEspera.findMany({
        include: {
          paciente: true,
        },
        orderBy: {
          idListaEspera: "asc",
        },
      });
      return listaEspera;
    } catch (error) {
      console.error("Erro ao buscar lista de espera:", error);
      throw new Error("Não foi possível buscar a lista de espera.");
    }
  }

  async findOne(id: number) {
    try {
      const entradaListaEspera = await prisma.listaEspera.findUniqueOrThrow({
        where: { idListaEspera: id },
        include: {
          paciente: true,
        },
      });
      return entradaListaEspera;
    } catch (error) {
      console.error(
        `Erro ao buscar entrada da lista de espera com ID ${id}:`,
        error
      );
      throw new Error("Entrada da lista de espera não encontrada.");
    }
  }

  async delete(id: number) {
    try {
      await prisma.listaEspera.findUniqueOrThrow({
        where: { idListaEspera: id },
      });

      await prisma.listaEspera.delete({
        where: { idListaEspera: id },
      });
    } catch (error: any) {
      if (
        error.code === "P2025" ||
        error.message.includes("Entrada da lista de espera não encontrada")
      ) {
        throw new Error("Entrada da lista de espera não encontrada.");
      }
      console.error(
        `Erro ao deletar entrada da lista de espera com ID ${id}:`,
        error
      );
      throw new Error(
        "Não foi possível remover o paciente da lista de espera."
      );
    }
  }
}
