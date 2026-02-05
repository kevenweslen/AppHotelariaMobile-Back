import { Router } from "express";
import loginController from "../controllers/loginController";
import cadastroController from "../controllers/cadastroController";

const rotaLogin = Router();

rotaLogin.post("/", loginController.login);
rotaLogin.post("/cadastro", cadastroController.cadastro);

export default rotaLogin;