import { prisma } from "../lib/prisma.js";
import { Prisma, CaseStatus, QueueStatus } from "@prisma/client";

export interface CreateHistoricoDto {
  idPaciente: string;
  id_ultimo_bolsista: string;
  data_desligamento?: Date | null;
}

const mapToLegacy = (c: any) => ({
  idHistorico: c.id,
  idPaciente: c.patientId,
  id_ultimo_bolsista: c.professionalId,
  data_desligamento: c.endDate || c.updatedAt,
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

export class HistoricoService {
  async create(data: CreateHistoricoDto, institutionId: string) {
    try {
      const patient = await prisma.patient.findFirstOrThrow({
        where: { id: data.idPaciente, institutionId },
      });
      const professional = await prisma.user.findFirstOrThrow({
        where: { id: data.id_ultimo_bolsista, institutionId },
      });

      let careCase = await prisma.careCase.findFirst({
        where: { patientId: data.idPaciente, status: CaseStatus.ACTIVE },
      });

      if (careCase) {
        careCase = await prisma.careCase.update({
          where: { id: careCase.id },
          data: { status: CaseStatus.ARCHIVED, endDate: data.data_desligamento || new Date() },
          include: { patient: { include: { intakeForm: true } }, professional: true },
        });
      } else {
        careCase = await prisma.careCase.create({
          data: {
            patientId: data.idPaciente,
            professionalId: data.id_ultimo_bolsista,
            institutionId,
            status: CaseStatus.ARCHIVED,
            startDate: new Date(),
            endDate: data.data_desligamento || new Date(),
          },
          include: { patient: { include: { intakeForm: true } }, professional: true },
        });
      }

      await prisma.patient.update({
        where: { id: data.idPaciente },
        data: { status: QueueStatus.ARCHIVED },
      });

      return mapToLegacy(careCase);
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new Error("Paciente ou Colaborador não encontrado.");
      }
      console.error("Erro ao criar registro de histórico:", error);
      throw new Error("Não foi possível criar o registro de histórico.");
    }
  }

  async findAll(institutionId: string) {
    try {
      const cases = await prisma.careCase.findMany({
        where: {
          institutionId,
          status: { in: [CaseStatus.COMPLETED, CaseStatus.ARCHIVED] },
        },
        include: {
          patient: { include: { intakeForm: true } },
          professional: true,
        },
        orderBy: {
          endDate: "asc",
        },
      });
      return cases.map(mapToLegacy);
    } catch (error) {
      console.error("Erro ao buscar históricos:", error);
      throw new Error("Não foi possível buscar os históricos.");
    }
  }

  async findOne(id: string, institutionId: string) {
    try {
      const careCase = await prisma.careCase.findFirstOrThrow({
        where: {
          id,
          institutionId,
          status: { in: [CaseStatus.COMPLETED, CaseStatus.ARCHIVED] },
        },
        include: {
          patient: { include: { intakeForm: true } },
          professional: true,
        },
      });
      return mapToLegacy(careCase);
    } catch (error) {
      console.error(`Erro ao buscar histórico com ID ${id}:`, error);
      throw new Error("Registro de histórico não encontrado.");
    }
  }

  async delete(id: string, institutionId: string) {
    try {
      const careCase = await prisma.careCase.findFirstOrThrow({
        where: {
          id,
          institutionId,
          status: { in: [CaseStatus.COMPLETED, CaseStatus.ARCHIVED] },
        },
      });

      await prisma.careCase.delete({
        where: { id: careCase.id },
      });
    } catch (error: any) {
      if (error.code === "P2025" || error.message.includes("not found")) {
        throw new Error("Registro de histórico não encontrado.");
      }
      console.error(`Erro ao deletar histórico com ID ${id}:`, error);
      throw new Error("Não foi possível deletar o registro de histórico.");
    }
  }
}

