import { Router } from "express";
import loginController from "../controllers/loginController"

const router = Router();

router.get("/", loginController.criarLogin);

export default router;