import { UserRole } from "@prisma/client";

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
        role: UserRole;
        institutionId: string;
      };
    }
  }
}

