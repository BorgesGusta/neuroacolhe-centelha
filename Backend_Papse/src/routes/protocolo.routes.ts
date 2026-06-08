import { Router } from "express";
import { ProtocoloController } from "../controllers/protocolo.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";

console.log("✅ protocolo.routes.ts foi carregado");

const router = Router();
const protocoloController = new ProtocoloController();

router.post(
  "/protocolos",
  authMiddleware,
  checkRole(["ADMIN"]),
  protocoloController.create
);
router.get(
  "/protocolos",
  authMiddleware,
  checkRole(["ADMIN", "BOLSISTA"]),
  protocoloController.findAll
);
router.get(
  "/protocolos/:id",
  authMiddleware,
  checkRole(["ADMIN", "BOLSISTA"]),
  protocoloController.findOne
);
router.put(
  "/protocolos/:id",
  authMiddleware,
  checkRole(["ADMIN"]),
  protocoloController.update
);
router.delete(
  "/protocolos/:id",
  authMiddleware,
  checkRole(["ADMIN"]),
  protocoloController.delete
);

export default router;
