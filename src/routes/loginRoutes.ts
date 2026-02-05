import { Router } from "express";
import loginController from "../controllers/loginController"

const loginRouter = Router();

loginRouter.post("/", loginController.criarLogin);
// loginRouter.post("/cadastro", cadastroLogin.cadastrar)

export default loginRouter;