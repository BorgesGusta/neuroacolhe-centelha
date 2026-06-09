import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import { UserRole } from "@prisma/client";

export interface CreateColaboradorDto {
  nome: string;
  matricula: string;
  email: string;
  data_admissao: Date;
  data_saida?: Date | null;
  senha: string;
  role: UserRole;
}

export type UpdateColaboradorDto = Partial<CreateColaboradorDto>;

const mapToLegacy = (user: any) => ({
  idBolsista: user.id,
  nome: user.name,
  email: user.email,
  role: user.role,
  active: user.active,
  matricula: user.email.split("@")[0]?.replace(/\D/g, "") || "12345",
  data_admissao: user.createdAt,
  data_saida: user.active ? null : user.updatedAt,
});

export class ColaboradorService {
  async create(data: CreateColaboradorDto, institutionId: string) {
    try {
      const salt = await bcrypt.genSalt(10);
      const senhaHash = await bcrypt.hash(data.senha, salt);

      const user = await prisma.user.create({
        data: {
          name: data.nome,
          email: data.email,
          password: senhaHash,
          role: data.role,
          active: true,
          institutionId,
        },
      });

      return mapToLegacy(user);
    } catch (error: any) {
      if (error.code === "P2002") {
        if (error.meta?.target?.includes("email")) {
          throw new Error("Este e-mail já está cadastrado.");
        }
      }
      console.error("Erro ao criar colaborador:", error);
      throw new Error("Não foi possível criar o colaborador.");
    }
  }

  async findAll(institutionId: string) {
    try {
      const users = await prisma.user.findMany({
        where: { institutionId },
      });
      return users.map(mapToLegacy);
    } catch (error) {
      console.error("Erro ao buscar colaboradores:", error);
      throw new Error("Não foi possível buscar os colaboradores.");
    }
  }

  async findOne(id: string, institutionId: string) {
    try {
      const user = await prisma.user.findFirstOrThrow({
        where: { id, institutionId },
      });
      return mapToLegacy(user);
    } catch (error) {
      console.error(`Erro ao buscar colaborador com ID ${id}:`, error);
      throw new Error("Colaborador não encontrado.");
    }
  }

  async update(id: string, data: UpdateColaboradorDto, institutionId: string) {
    try {
      const updateData: any = {};
      if (data.nome) updateData.name = data.nome;
      if (data.email) updateData.email = data.email;
      if (data.role) updateData.role = data.role;
      if (data.senha) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(data.senha, salt);
      }

      const user = await prisma.user.update({
        where: { id, institutionId },
        data: updateData,
      });

      return mapToLegacy(user);
    } catch (error: any) {
      if (error.code === "P2002") {
        if (error.meta?.target?.includes("email")) {
          throw new Error("Este e-mail já está sendo utilizado.");
        }
      }
      console.error(`Erro ao atualizar colaborador com ID ${id}:`, error);
      throw new Error("Colaborador não encontrado ou dados inválidos.");
    }
  }

  async delete(id: string, institutionId: string) {
    try {
      const emCasos = await prisma.careCase.count({
        where: {
          OR: [
            { professionalId: id },
            { supervisorId: id }
          ],
          status: "ACTIVE"
        }
      });

      if (emCasos > 0) {
        throw new Error("VINCULO_ATIVO");
      }

      await prisma.user.update({
        where: { id, institutionId },
        data: {
          active: false,
          resetToken: null,
          resetTokenExpires: null,
        },
      });
    } catch (error: any) {
      if (error.message === "VINCULO_ATIVO") {
        throw new Error(
          "Este bolsista ainda possui pacientes ativos. Transfira os pacientes antes de removê-lo.",
        );
      }
      console.error(`Erro ao inativar colaborador com ID ${id}:`, error);
      throw new Error("Erro interno ao inativar o colaborador.");
    }
  }
}

