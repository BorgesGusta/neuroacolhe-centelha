import { prisma } from "../lib/prisma.js";
import { Prisma, CaseType, QueueStatus, CaseStatus } from "@prisma/client";

export interface CreateProtocoloDto {
  data_inicio_atendimento: string;
  qtde_sessoes: number;
  idPaciente: string;
  idBolsista: string;
}

export interface UpdateProtocoloDto {
  data_inicio_atendimento?: string;
  qtde_sessoes?: number;
}

const mapToLegacy = (c: any) => ({
  idProtocolo: c.id,
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

export class ProtocoloService {
  public async create(data: CreateProtocoloDto, institutionId: string) {
    try {
      const careCase = await prisma.$transaction(
        async (tx) => {
          await tx.patient.findFirstOrThrow({
            where: { id: data.idPaciente, institutionId },
          });

          await tx.user.findFirstOrThrow({
            where: { id: data.idBolsista, institutionId },
          });

          const novoProtocolo = await tx.careCase.create({
            data: {
              patientId: data.idPaciente,
              professionalId: data.idBolsista,
              institutionId,
              type: CaseType.SHORT_TERM,
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

          return novoProtocolo;
        }
      );

      return mapToLegacy(careCase);
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new Error("Paciente ou Colaborador não encontrado.");
      }
      console.error("Erro ao criar protocolo:", error);
      throw new Error("Não foi possível criar o protocolo.");
    }
  }

  public async findAll(institutionId: string) {
    try {
      const cases = await prisma.careCase.findMany({
        where: {
          institutionId,
          type: CaseType.SHORT_TERM,
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
      console.error("Erro ao buscar protocolos:", error);
      throw new Error("Não foi possível buscar os protocolos.");
    }
  }

  public async findOne(id: string, institutionId: string) {
    try {
      const careCase = await prisma.careCase.findFirstOrThrow({
        where: { id, institutionId, type: CaseType.SHORT_TERM },
        include: {
          patient: { include: { intakeForm: true } },
          professional: true,
          _count: { select: { sessionNotes: true } },
        },
      });
      return mapToLegacy(careCase);
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new Error("Protocolo não encontrado.");
      }
      console.error("Erro ao buscar protocolo:", error);
      throw new Error("Não foi possível buscar o protocolo.");
    }
  }

  public async update(id: string, data: UpdateProtocoloDto, institutionId: string) {
    try {
      const existing = await prisma.careCase.findFirstOrThrow({
        where: { id, institutionId, type: CaseType.SHORT_TERM },
      });

      const updateData: any = {};
      if (data.data_inicio_atendimento) {
        updateData.startDate = new Date(data.data_inicio_atendimento);
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
        throw new Error("Protocolo não encontrado para atualizar.");
      }
      console.error("Erro ao atualizar protocolo:", error);
      throw new Error("Não foi possível atualizar o protocolo.");
    }
  }

  async delete(id: string, institutionId: string) {
    try {
      const existing = await prisma.careCase.findFirstOrThrow({
        where: { id, institutionId, type: CaseType.SHORT_TERM },
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
        throw new Error("Registro de protocolo não encontrado.");
      }
      console.error(
        `Erro ao arquivar registro do protocolo com ID ${id}:`,
        error
      );
      throw new Error("Não foi possível arquivar o registro.");
    }
  }
}

