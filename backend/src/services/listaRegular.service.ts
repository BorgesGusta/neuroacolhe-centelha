import { prisma } from "../lib/prisma.js";
import { Prisma, UserRole, QueueStatus } from "@prisma/client";

interface UsuarioLogado {
  id: string;
  role: UserRole;
  institutionId: string;
}

export interface CreateListaRegularDto {
  idPaciente: string;
  idBolsista: string;
}

export class ListaRegularService {
  private async enrichQueueEntry(entry: any) {
    let idBolsista = "";
    let professional = null;
    if (entry.notes && entry.notes.startsWith("BOLSISTA_ID:")) {
      idBolsista = entry.notes.split("BOLSISTA_ID:")[1] || "";
      if (idBolsista) {
        professional = await prisma.user.findUnique({
          where: { id: idBolsista },
        });
      }
    }
    return {
      ...entry,
      idBolsista,
      professional,
    };
  }

  private mapToLegacy(entry: any) {
    return {
      idListaRegular: entry.id,
      idPaciente: entry.patientId,
      idBolsista: entry.idBolsista,
      paciente: {
        idPaciente: entry.patient.id,
        nome: entry.patient.name,
        email: entry.patient.email || "",
        telefone: entry.patient.phone || "",
        matricula: "12345",
        curso: "Psicologia",
        data_nascimento: entry.patient.birthDate,
        data_inscricao: entry.patient.createdAt,
        relato: entry.patient.intakeForm?.reasonForSeeking || "",
        status: entry.patient.status,
      },
      colaborador: entry.professional ? {
        idBolsista: entry.professional.id,
        nome: entry.professional.name,
        email: entry.professional.email,
        role: entry.professional.role,
      } : null,
    };
  }

  async create(data: CreateListaRegularDto, institutionId: string) {
    try {
      return await prisma.$transaction(async (tx) => {
        const waitlistEntry = await tx.careQueue.findFirst({
          where: {
            patientId: data.idPaciente,
            institutionId,
            status: {
              in: [QueueStatus.RECEIVED, QueueStatus.IN_ANALYSIS],
            },
          },
        });

        if (!waitlistEntry) {
          throw new Error("Paciente não encontrado na lista de espera.");
        }

        await tx.user.findFirstOrThrow({
          where: { id: data.idBolsista, institutionId },
        });

        await tx.careQueue.delete({
          where: { id: waitlistEntry.id },
        });

        const newEntry = await tx.careQueue.create({
          data: {
            patientId: data.idPaciente,
            institutionId,
            status: QueueStatus.WAITING_CARE,
            notes: `BOLSISTA_ID:${data.idBolsista}`,
          },
          include: {
            patient: {
              include: {
                intakeForm: true,
              },
            },
          },
        });

        await tx.patient.update({
          where: { id: data.idPaciente },
          data: { status: QueueStatus.WAITING_CARE },
        });

        const enriched = await this.enrichQueueEntry(newEntry);
        return this.mapToLegacy(enriched);
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        console.error(
          "Erro ao criar na lista regular: Colaborador não encontrado.",
          error
        );
        throw new Error("Colaborador informado não existe.");
      }
      if (
        error instanceof Error &&
        error.message === "Paciente não encontrado na lista de espera."
      ) {
        console.error("Erro ao criar na lista regular:", error.message);
        throw error;
      }

      console.error(
        "Erro ao mover paciente da lista de espera para a regular:",
        error
      );
      throw new Error("Erro interno ao adicionar paciente na lista regular.");
    }
  }

  async findAll(usuario: UsuarioLogado) {
    try {
      const whereClause: any = {
        institutionId: usuario.institutionId,
        status: QueueStatus.WAITING_CARE,
      };

      if (usuario.role === UserRole.PROFESSIONAL) {
        whereClause.notes = `BOLSISTA_ID:${usuario.id}`;
      }

      const listaRegular = await prisma.careQueue.findMany({
        where: whereClause,
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

      const enriched = await Promise.all(
        listaRegular.map((item) => this.enrichQueueEntry(item))
      );

      return enriched.map((item) => this.mapToLegacy(item));
    } catch (error) {
      console.error("Erro ao buscar lista regular:", error);
      throw new Error("Não foi possível buscar a lista regular.");
    }
  }

  async findOne(id: string, institutionId: string) {
    try {
      const entry = await prisma.careQueue.findFirstOrThrow({
        where: { id, institutionId },
        include: {
          patient: {
            include: {
              intakeForm: true,
            },
          },
        },
      });

      const enriched = await this.enrichQueueEntry(entry);
      return this.mapToLegacy(enriched);
    } catch (error: any) {
      if (error.code === "P2025") {
        console.error(`Entrada da lista regular com ID ${id} não encontrada.`);
        throw new Error("Entrada da lista regular não encontrada.");
      }
      console.error(
        `Erro ao buscar entrada da lista regular com ID ${id}:`,
        error
      );
      throw new Error("Erro ao buscar a entrada da lista regular.");
    }
  }

  async delete(id: string, institutionId: string) {
    try {
      const entry = await prisma.careQueue.findFirstOrThrow({
        where: { id, institutionId },
      });

      const enriched = await this.enrichQueueEntry(entry);

      await prisma.$transaction(async (tx) => {
        await tx.careQueue.delete({
          where: { id },
        });

        await tx.patient.update({
          where: { id: enriched.patientId },
          data: { status: QueueStatus.ARCHIVED },
        });
      });
    } catch (error: any) {
      if (error.code === "P2025" || error.message.includes("not found")) {
        throw new Error("Registro na lista regular não encontrado.");
      }
      console.error(
        `Erro ao arquivar registro da lista regular com ID ${id}:`,
        error
      );
      throw new Error("Não foi possível arquivar o registro.");
    }
  }
}

