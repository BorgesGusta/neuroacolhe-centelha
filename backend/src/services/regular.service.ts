import { prisma } from "../lib/prisma.js";
import { Prisma, CaseType, QueueStatus, CaseStatus } from "@prisma/client";

export interface CreateRegularDto {
  data_inicio_atendimento: Date;
  qtde_sessoes: number;
  idPaciente: string;
  idBolsista: string;
}

export interface UpdateRegularDto {
  data_inicio_atendimento?: Date;
  qtde_sessoes?: number;
  idBolsista?: string;
}

const mapToLegacy = (c: any) => ({
  idRegular: c.id,
  qtde_sessoes: c._count?.sessionNotes ?? c.sessionNotes?.length ?? 0,
  data_inicio_atendimento: c.startDate,
  idPaciente: c.patientId,
  idBolsista: c.professionalId,
  paciente: {
    idPaciente: c.patient.id,
    nome: c.patient.name,
    email: c.patient.email || "",
    telefone: c.patient.phone || "",
    matricula: "12345",
    curso: "Psicologia",
    data_nascimento: c.patient.birthDate,
    data_inscricao: c.patient.createdAt,
    relato: c.patient.intakeForm?.reasonForSeeking || "",
    status: c.patient.status,
  },
  colaborador: {
    idBolsista: c.professional.id,
    nome: c.professional.name,
    email: c.professional.email,
    role: c.professional.role,
    active: c.professional.active,
  },
});

export class RegularService {
  async create(data: CreateRegularDto, institutionId: string) {
    try {
      const careCase = await prisma.$transaction(async (tx) => {
        const queueEntries = await tx.careQueue.findMany({
          where: {
            patientId: data.idPaciente,
            institutionId,
            status: {
              in: [QueueStatus.RECEIVED, QueueStatus.IN_ANALYSIS, QueueStatus.WAITING_CARE],
            },
          },
        });

        await tx.patient.findFirstOrThrow({
          where: { id: data.idPaciente, institutionId },
        });

        await tx.user.findFirstOrThrow({
          where: { id: data.idBolsista, institutionId },
        });

        if (queueEntries.length > 0) {
          await tx.careQueue.deleteMany({
            where: {
              id: { in: queueEntries.map((q) => q.id) },
            },
          });
        }

        const novoRegistro = await tx.careCase.create({
          data: {
            patientId: data.idPaciente,
            professionalId: data.idBolsista,
            institutionId,
            type: CaseType.LONG_TERM,
            status: CaseStatus.ACTIVE,
            startDate: new Date(data.data_inicio_atendimento),
          },
          include: {
            patient: { include: { intakeForm: true } },
            professional: true,
            _count: { select: { sessionNotes: true } },
          },
        });

        await tx.patient.update({
          where: { id: data.idPaciente },
          data: { status: QueueStatus.IN_CARE },
        });

        return novoRegistro;
      });

      return mapToLegacy(careCase);
    } catch (error: any) {
      if (error.code === "P2025") {
        console.error(
          "Erro ao criar registro regular: Colaborador ou paciente não encontrado.",
          error,
        );
        throw new Error("Colaborador informado não existe.");
      }
      throw error;
    }
  }

  async findAll(institutionId: string) {
    try {
      const cases = await prisma.careCase.findMany({
        where: {
          institutionId,
          type: CaseType.LONG_TERM,
          status: CaseStatus.ACTIVE,
        },
        include: {
          patient: { include: { intakeForm: true } },
          professional: true,
          _count: { select: { sessionNotes: true } },
        },
      });
      return cases.map(mapToLegacy);
    } catch (error) {
      console.error("Erro ao buscar registros regulares:", error);
      throw new Error("Erro interno ao buscar registros regulares.");
    }
  }

  async findOne(id: string, institutionId: string) {
    try {
      const careCase = await prisma.careCase.findFirstOrThrow({
        where: { id, institutionId, type: CaseType.LONG_TERM },
        include: {
          patient: { include: { intakeForm: true } },
          professional: true,
          _count: { select: { sessionNotes: true } },
        },
      });
      return mapToLegacy(careCase);
    } catch (error: any) {
      if (error.code === "P2025") {
        console.error(`Registro regular com ID ${id} não encontrado.`);
        throw new Error("Registro regular não encontrado.");
      }
      console.error(`Erro ao buscar registro regular com ID ${id}:`, error);
      throw new Error("Erro ao buscar o registro regular.");
    }
  }

  async update(id: string, data: UpdateRegularDto, institutionId: string) {
    try {
      const existing = await prisma.careCase.findFirstOrThrow({
        where: { id, institutionId, type: CaseType.LONG_TERM },
      });

      const updateData: any = {};
      if (data.data_inicio_atendimento) {
        updateData.startDate = new Date(data.data_inicio_atendimento);
      }
      if (data.idBolsista) {
        await prisma.user.findFirstOrThrow({
          where: { id: data.idBolsista, institutionId },
        });
        updateData.professionalId = data.idBolsista;
      }

      const careCase = await prisma.careCase.update({
        where: { id },
        data: updateData,
        include: {
          patient: { include: { intakeForm: true } },
          professional: true,
          _count: { select: { sessionNotes: true } },
        },
      });

      return mapToLegacy(careCase);
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new Error("Registro ou colaborador não encontrado.");
      }
      console.error(`Erro ao atualizar registro regular ID ${id}:`, error);
      throw new Error("Erro interno ao atualizar registro regular.");
    }
  }

  async delete(id: string, institutionId: string) {
    try {
      const existing = await prisma.careCase.findFirstOrThrow({
        where: { id, institutionId, type: CaseType.LONG_TERM },
      });

      await prisma.$transaction(async (tx) => {
        await tx.careCase.update({
          where: { id },
          data: { status: CaseStatus.ARCHIVED, endDate: new Date() },
        });

        await tx.patient.update({
          where: { id: existing.patientId },
          data: { status: QueueStatus.ARCHIVED },
        });
      });
    } catch (error: any) {
      if (error.code === "P2025" || error.message.includes("not found")) {
        throw new Error("Registro de atendimento regular não encontrado.");
      }
      console.error(
        `Erro ao arquivar registro de atendimento regular com ID ${id}:`,
        error,
      );
      throw new Error("Não foi possível arquivar o registro.");
    }
  }
}

