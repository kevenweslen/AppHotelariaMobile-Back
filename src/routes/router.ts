import { Router } from "express";
import rotaTarefa from "./tarefaRoute";
import rotaLogin from "../controllers/loginController";
import { createJWT } from "../utils/jwt"
import { middleware } from "./jwtMiddleware";

const handlerRouter = Router();
handlerRouter.use("/tarefas", rotaTarefa);

handlerRouter.use("/api/login", rotaLogin.login);

handlerRouter.use("/jwt", (req, res) => {
  const payload = {
    id: 123,
    nome: "Matheus",
    cargo: "cliente"
  }
  res.json(createJWT(payload))
})

handlerRouter.get("/testJWT", middleware, (req, res) => {
  res.json("passou pelo jwt middleware");

})


export default handlerRouter;
