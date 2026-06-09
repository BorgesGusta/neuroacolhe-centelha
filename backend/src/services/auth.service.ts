import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { enviarEmailRecuperacao } from "./email.service.js";

export interface LoginDto {
  email: string;
  senha: string;
}

export class AuthService {
  async login(data: LoginDto) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user || user.active === false) {
      throw new Error("E-mail inválido, senha incorreta ou conta inativa.");
    }

    const senhaValida = await bcrypt.compare(data.senha, user.password);

    if (!senhaValida) {
      throw new Error("E-mail ou senha inválidos.");
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("Segredo JWT não configurado no servidor.");
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
        institutionId: user.institutionId,
      },
      secret,
      {
        expiresIn: "8h",
      },
    );

    const { password, ...userSemSenha } = user;
    
    // Map to legacy fields expected by frontend
    const colaborador = {
      ...userSemSenha,
      idBolsista: user.id,
      senha: "",
    };

    return {
      usuario: colaborador,
      token: token,
    };
  }

  async forgotPassword(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        message: "Se o e-mail existir, um link de recuperação foi enviado.",
      };
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const tokenExpires = new Date(Date.now() + 3600000);

    await prisma.user.update({
      where: { email },
      data: {
        resetToken: resetToken,
        resetTokenExpires: tokenExpires,
      },
    });

    await enviarEmailRecuperacao(email, resetToken);

    return { message: "E-mail de recuperação enviado com sucesso." };
  }

  async resetPassword(token: string, novaSenha: string) {
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
      },
    });

    if (!user) {
      throw new Error("Token inválido ou não encontrado.");
    }

    const agora = new Date();
    if (!user.resetTokenExpires || user.resetTokenExpires < agora) {
      throw new Error("Token expirado. Por favor, solicite um novo link.");
    }

    const hashedSenha = await bcrypt.hash(novaSenha, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedSenha,
        resetToken: null,
        resetTokenExpires: null,
      },
    });

    return { message: "Senha redefinida com sucesso." };
  }
}

