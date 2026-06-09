import { prisma } from "../lib/prisma.js";
import { Prisma, QueueStatus } from "@prisma/client";

export interface CreatePacienteDto {
  nome: string;
  email: string;
  matricula: string;
  data_nascimento: Date;
  data_inscricao: Date;
  telefone?: string;
  relato?: string;
  curso?: string;
  termo_lgpd: boolean;
  data_aceite_termo: Date;
  ip_origem: string;
  userAgent?: string;
}

export type UpdatePacienteDto = Partial<CreatePacienteDto>;

const mapToLegacy = (patient: any) => ({
  idPaciente: patient.id,
  nome: patient.name,
  email: patient.email || "",
  telefone: patient.phone || "",
  matricula: "12345",
  curso: "Psicologia",
  data_nascimento: patient.birthDate,
  data_inscricao: patient.createdAt,
  relato: patient.intakeForm?.reasonForSeeking || "",
  status: patient.status,
});

export class PacienteService {
  async create(data: CreatePacienteDto, institutionId: string) {
    try {
      const novoPaciente = await prisma.$transaction(
        async (tx) => {
          const patient = await tx.patient.create({
            data: {
              name: data.nome,
              email: data.email,
              phone: data.telefone ?? null,
              birthDate: new Date(data.data_nascimento),
              status: QueueStatus.RECEIVED,
              institutionId,
            },
          });

          await tx.accessibilityProfile.create({
            data: {
              patientId: patient.id,
              hasNeurodivergence: false,
            },
          });

          await tx.intakeForm.create({
            data: {
              patientId: patient.id,
              reasonForSeeking: data.relato || "Não informado",
              availability: "Não informado",
            },
          });

          await tx.consentRecord.create({
            data: {
              patientId: patient.id,
              consentGiven: true,
              termVersion: "1.0",
              ipAddress: data.ip_origem,
              userAgent: data.userAgent || "Unknown",
            },
          });

          await tx.careQueue.create({
            data: {
              patientId: patient.id,
              institutionId,
              status: QueueStatus.RECEIVED,
              notes: "Triagem inicial enviada",
            },
          });

          return patient;
        },
      );

      const fullPatient = await prisma.patient.findUniqueOrThrow({
        where: { id: novoPaciente.id },
        include: { intakeForm: true },
      });

      return mapToLegacy(fullPatient);
    } catch (error) {
      console.error(
        "Erro ao criar paciente e adicionar à lista de espera:",
        error,
      );

      throw new Error(
        "Não foi possível criar o paciente e adicioná-lo à lista de espera.",
      );
    }
  }

  async findAll(institutionId: string) {
    try {
      const patients = await prisma.patient.findMany({
        where: { institutionId },
        include: { intakeForm: true },
      });
      return patients.map(mapToLegacy);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
      throw new Error("Não foi possível buscar os pacientes.");
    }
  }

  async findOne(id: string, institutionId: string) {
    try {
      const patient = await prisma.patient.findFirstOrThrow({
        where: { id, institutionId },
        include: { intakeForm: true },
      });

      return mapToLegacy(patient);
    } catch (error) {
      console.error(`Erro ao buscar paciente com ID ${id}:`, error);

      throw new Error("Paciente não encontrado.");
    }
  }

  async update(id: string, data: UpdatePacienteDto, institutionId: string) {
    try {
      const existing = await prisma.patient.findFirstOrThrow({
        where: { id, institutionId },
      });

      const updateData: any = {};
      if (data.nome) updateData.name = data.nome;
      if (data.email) updateData.email = data.email;
      if (data.telefone) updateData.phone = data.telefone;
      if (data.data_nascimento) updateData.birthDate = new Date(data.data_nascimento);

      const patient = await prisma.patient.update({
        where: { id },
        data: updateData,
      });

      if (data.relato) {
        await prisma.intakeForm.upsert({
          where: { patientId: id },
          update: { reasonForSeeking: data.relato },
          create: { patientId: id, reasonForSeeking: data.relato, availability: "Não informado" },
        });
      }

      const fullPatient = await prisma.patient.findUniqueOrThrow({
        where: { id },
        include: { intakeForm: true },
      });

      return mapToLegacy(fullPatient);
    } catch (error) {
      console.error(`Erro ao atualizar paciente com ID ${id}:`, error);
      throw new Error("Paciente não encontrado ou dados inválidos.");
    }
  }

  async delete(id: string, institutionId: string) {
    try {
      await prisma.patient.findFirstOrThrow({
        where: { id, institutionId },
      });

      await prisma.patient.delete({
        where: { id },
      });
    } catch (error) {
      console.error(`Erro ao deletar paciente com ID ${id}:`, error);
      throw new Error("Paciente não encontrado.");
    }
  }
}

