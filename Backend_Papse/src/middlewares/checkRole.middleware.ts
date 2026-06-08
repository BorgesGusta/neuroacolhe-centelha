import { type Request, type Response, type NextFunction } from "express";
import { Prisma, Role } from "@prisma/client";

export const checkRole = (rolesPermitidos: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.user;

    if (!rolesPermitidos.includes(role)) {
      return res.status(403).json({
        message: "Acesso negado. Você não tem permissão para este recurso.",
      });
    }

    return next();
  };
};
