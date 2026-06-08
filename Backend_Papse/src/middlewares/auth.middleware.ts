import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Prisma, Role } from "@prisma/client";

interface TokenPayload {
  id: number;
  role: Role;
  iat: number;
  exp: number;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json({ message: "Token de autenticação não fornecido." });
  }

  const parts = authorization.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ message: "Token mal formatado." });
  }
  const token = parts[1];

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res
      .status(500)
      .json({ message: "Segredo JWT não configurado no servidor." });
  }

  try {
    const payload = jwt.verify(token as string, secret);

    if (
      typeof payload === "object" &&
      payload !== null &&
      "id" in payload &&
      "role" in payload
    ) {
      req.user = {
        id: (payload as any).id,
        role: (payload as any).role,
      };

      return next();
    } else {
      return res.status(401).json({ message: "Payload do token inválido." });
    }
  } catch (error: any) {
    return res.status(401).json({ message: "Token inválido ou expirado." });
  }
};
