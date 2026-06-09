import { prisma } from "../lib/prisma.js";
import crypto from "crypto";

const mapToLegacy = (note: any) => ({
  idRelatorio: note.id,
  idPaciente: note.patientId,
  idBolsista: note.professionalId,
  texto: note.content,
  data_criacao: note.sessionDate,
  colaborador: {
    nome: note.professional.name,
    matricula: note.professional.email.split("@")[0]?.replace(/\D/g, "") || "12345",
  },
});

export const createRelatorioService = async (
  idPaciente: string,
  idBolsista: string,
  texto: string,
) => {
  const careCase = await prisma.careCase.findFirst({
    where: {
      patientId: idPaciente,
      status: "ACTIVE",
    },
  });

  if (!careCase) {
    throw new Error("Não foi encontrado nenhum caso clínico ativo para este paciente.");
  }

  const dataToHash = `${careCase.id}-${idPaciente}-${idBolsista}-${texto}-${new Date().toISOString()}`;
  const integrityHash = crypto.createHash("sha256").update(dataToHash).digest("hex");

  const note = await prisma.sessionNote.create({
    data: {
      caseId: careCase.id,
      patientId: idPaciente,
      institutionId: careCase.institutionId,
      professionalId: idBolsista,
      content: texto,
      sessionDate: new Date(),
      integrityHash,
      isAbsent: false,
    },
    include: {
      professional: true,
    },
  });

  return mapToLegacy(note);
};

export const getRelatoriosByPacienteService = async (idPaciente: string) => {
  const notes = await prisma.sessionNote.findMany({
    where: { patientId: idPaciente },
    include: {
      professional: true,
    },
    orderBy: {
      sessionDate: "desc",
    },
  });
  return notes.map(mapToLegacy);
};

