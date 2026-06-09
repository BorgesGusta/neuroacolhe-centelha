import { type Request, type Response, type NextFunction } from "express";
import { UserRole } from "@prisma/client";

export const checkRole = (rolesPermitidos: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.user;

    const hasPermission = rolesPermitidos.some(r => {
      if (r === "ADMIN" && (role === UserRole.INSTITUTION_ADMIN || role === UserRole.PLATFORM_ADMIN)) return true;
      if (r === "BOLSISTA" && role === UserRole.PROFESSIONAL) return true;
      return r === role;
    });

    if (!hasPermission) {
      return res.status(403).json({
        message: "Acesso negado. Você não tem permissão para este recurso.",
      });
    }

    return next();
  };
};

