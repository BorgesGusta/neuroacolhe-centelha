import { prisma } from "../lib/prisma.js";
import { Prisma } from "@prisma/client";

export interface CreateHistoricoDto {
  idPaciente: number;
  id_ultimo_bolsista: number;
  data_desligamento?: Date | null;
}

export class HistoricoService {
  async create(data: CreateHistoricoDto) {
    try {
      await prisma.paciente.findUniqueOrThrow({
        where: { idPaciente: data.idPaciente },
      });
      await prisma.colaborador.findUniqueOrThrow({
        where: { idBolsista: data.id_ultimo_bolsista },
      });

      const historico = await prisma.historico.create({
        data: {
          idPaciente: data.idPaciente,
          id_ultimo_bolsista: data.id_ultimo_bolsista,
          data_desligamento: data.data_desligamento
            ? new Date(data.data_desligamento)
            : new Date(),
        },
        include: {
          paciente: true,
          colaborador: true,
        },
      });
      return historico;
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new Error("Paciente ou Colaborador não encontrado.");
      }
      console.error("Erro ao criar registro de histórico:", error);
      throw new Error("Não foi possível criar o registro de histórico.");
    }
  }

  async findAll() {
    try {
      const historicos = await prisma.historico.findMany({
        include: {
          paciente: true,
          colaborador: true,
        },
        orderBy: {
          data_desligamento: "asc",
        },
      });
      return historicos;
    } catch (error) {
      console.error("Erro ao buscar históricos:", error);
      throw new Error("Não foi possível buscar os históricos.");
    }
  }

  async findOne(id: number) {
    try {
      const historico = await prisma.historico.findUniqueOrThrow({
        where: { idHistorico: id },
        include: {
          paciente: true,
          colaborador: true,
        },
      });
      return historico;
    } catch (error) {
      console.error(`Erro ao buscar histórico com ID ${id}:`, error);
      throw new Error("Registro de histórico não encontrado.");
    }
  }

  async delete(id: number) {
    try {
      await prisma.historico.findUniqueOrThrow({
        where: { idHistorico: id },
      });
      await prisma.historico.delete({
        where: { idHistorico: id },
      });
    } catch (error: any) {
      if (error.code === "P2025" || error.message.includes("não encontrado")) {
        throw new Error("Registro de histórico não encontrado.");
      }
      console.error(`Erro ao deletar histórico com ID ${id}:`, error);
      throw new Error("Não foi possível deletar o registro de histórico.");
    }
  }
}
