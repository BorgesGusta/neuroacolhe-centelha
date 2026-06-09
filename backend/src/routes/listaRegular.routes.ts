import { Router } from "express";
import { ListaRegularController } from "../controllers/listaRegular.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";

const router = Router();
const listaRegularController = new ListaRegularController();

router.post(
  "/listaregular",
  authMiddleware,
  checkRole(["ADMIN"]),
  listaRegularController.create
);
router.get(
  "/listaregular",
  authMiddleware,
  checkRole(["ADMIN", "BOLSISTA"]),
  listaRegularController.findAll
);
router.get(
  "/listaregular/:id",
  authMiddleware,
  checkRole(["ADMIN", "BOLSISTA"]),
  listaRegularController.findOne
);
router.delete(
  "/listaregular/:id",
  authMiddleware,
  checkRole(["ADMIN"]),
  listaRegularController.delete
);

export default router;
