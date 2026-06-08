import { Router } from "express";
import { ListaEsperaController } from "../controllers/listaEspera.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";

const router = Router();
const listaEsperaController = new ListaEsperaController();

router.post(
  "/listaespera",
  authMiddleware,
  checkRole(["ADMIN"]),
  listaEsperaController.create
);
router.get(
  "/listaespera",
  authMiddleware,
  checkRole(["ADMIN"]),
  listaEsperaController.findAll
);
router.get(
  "/listaespera/:id",
  authMiddleware,
  checkRole(["ADMIN"]),
  listaEsperaController.findOne
);
router.delete(
  "/listaespera/:id",
  authMiddleware,
  checkRole(["ADMIN"]),
  listaEsperaController.delete
);

export default router;
