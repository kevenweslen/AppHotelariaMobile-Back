import { Router } from "express";
import loginController from "../controllers/loginController";

const rotaLogin = Router();
rotaLogin.post("/", () => {
  console.log("Login realizado com sucesso");
}, loginController.login);

export default rotaLogin;