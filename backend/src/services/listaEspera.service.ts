import { prisma } from "../lib/prisma.js";
import { QueueStatus } from "@prisma/client";

export interface CreateListaEsperaDto {
  idPaciente: string;
}

const mapToLegacy = (queueEntry: any) => ({
  idListaEspera: queueEntry.id,
  idPaciente: queueEntry.patientId,
  paciente: {
    idPaciente: queueEntry.patient.id,
    nome: queueEntry.patient.name,
    email: queueEntry.patient.email || "",
    telefone: queueEntry.patient.phone || "",
    matricula: "12345",
    curso: "Psicologia",
    data_nascimento: queueEntry.patient.birthDate,
    data_inscricao: queueEntry.patient.createdAt,
    relato: queueEntry.patient.intakeForm?.reasonForSeeking || "",
    status: queueEntry.patient.status,
  },
});

export class ListaEsperaService {
  async create(data: CreateListaEsperaDto, institutionId: string) {
    try {
      await prisma.patient.findFirstOrThrow({
        where: { id: data.idPaciente, institutionId },
      });

      const queueEntry = await prisma.careQueue.create({
        data: {
          patientId: data.idPaciente,
          institutionId,
          status: QueueStatus.RECEIVED,
          notes: "Adicionado manualmente à lista de espera",
        },
        include: {
          patient: {
            include: {
              intakeForm: true,
            },
          },
        },
      });

      await prisma.patient.update({
        where: { id: data.idPaciente },
        data: { status: QueueStatus.RECEIVED },
      });

      return mapToLegacy(queueEntry);
    } catch (error: any) {
      if (
        error.code === "P2025" ||
        error.message.includes("not found")
      ) {
        throw new Error(`Paciente com ID ${data.idPaciente} não encontrado.`);
      }
      console.error("Erro ao adicionar paciente à lista de espera:", error);
      throw new Error(
        "Não foi possível adicionar o paciente à lista de espera."
      );
    }
  }

  async findAll(institutionId: string) {
    try {
      const waitlist = await prisma.careQueue.findMany({
        where: {
          institutionId,
          status: {
            in: [QueueStatus.RECEIVED, QueueStatus.IN_ANALYSIS],
          },
        },
        include: {
          patient: {
            include: {
              intakeForm: true,
            },
          },
        },
        orderBy: {
          enteredAt: "asc",
        },
      });
      return waitlist.map(mapToLegacy);
    } catch (error) {
      console.error("Erro ao buscar lista de espera:", error);
      throw new Error("Não foi possível buscar a lista de espera.");
    }
  }

  async findOne(id: string, institutionId: string) {
    try {
      const queueEntry = await prisma.careQueue.findFirstOrThrow({
        where: { id, institutionId },
        include: {
          patient: {
            include: {
              intakeForm: true,
            },
          },
        },
      });
      return mapToLegacy(queueEntry);
    } catch (error) {
      console.error(
        `Erro ao buscar entrada da lista de espera com ID ${id}:`,
        error
      );
      throw new Error("Entrada da lista de espera não encontrada.");
    }
  }

  async delete(id: string, institutionId: string) {
    try {
      const existing = await prisma.careQueue.findFirstOrThrow({
        where: { id, institutionId },
      });

      await prisma.careQueue.delete({
        where: { id: existing.id },
      });
    } catch (error: any) {
      if (
        error.code === "P2025" ||
        error.message.includes("not found")
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

