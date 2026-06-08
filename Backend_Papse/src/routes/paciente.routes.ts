import { Router } from "express";
import { PacienteController } from "../controllers/paciente.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";

console.log("✅ paciente.routes.ts foi carregado");

const router = Router();
const pacienteController = new PacienteController();

router.post(
  "/pacientes", /*
  authMiddleware,
  checkRole(["ADMIN"]),*/
  pacienteController.create
);
router.get(
  "/pacientes", /*
  authMiddleware,
  checkRole(["ADMIN"]),*/
  authMiddleware,
  checkRole(["ADMIN"]),
  pacienteController.findAll
);
router.get(
  "/pacientes/:id", /*
  authMiddleware,
  checkRole(["ADMIN"]),*/
  authMiddleware,
  checkRole(["ADMIN"]),
  pacienteController.findOne
);
router.put(
  "/pacientes/:id", /*
  authMiddleware,
  checkRole(["ADMIN"]),*/
  authMiddleware,
  checkRole(["ADMIN"]),
  pacienteController.update
);
router.delete(
  "/pacientes/:id", /*
  authMiddleware,
  checkRole(["ADMIN"]),*/
  authMiddleware,
  checkRole(["ADMIN"]),
  pacienteController.delete
);

export default router;
