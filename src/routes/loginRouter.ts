import { Router } from "express";
import loginController from "../controllers/loginController";

const rotaLogin = Router();

rotaLogin.post("/", loginController.login);

export default rotaLogin;