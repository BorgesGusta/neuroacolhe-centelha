import { Router } from "express";
import { HistoricoController } from "../controllers/historico.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";

const router = Router();
const historicoController = new HistoricoController();

router.post(
  "/historico",
  authMiddleware,
  checkRole(["ADMIN"]),
  historicoController.create
);
router.get(
  "/historico",
  authMiddleware,
  checkRole(["ADMIN"]),
  historicoController.findAll
);
router.get(
  "/historico/:id",
  authMiddleware,
  checkRole(["ADMIN"]),
  historicoController.findOne
);
router.delete(
  "/historico/:id",
  authMiddleware,
  checkRole(["ADMIN"]),
  historicoController.delete
);

export default router;
