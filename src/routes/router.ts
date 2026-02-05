import { Router } from "express";
import { createJWT } from "../utils/jwt"
import { middleware } from "./jwtMiddleware";
import rotaLogin from "./loginRouter";

const handlerRouter = Router();

handlerRouter.use("/api/login", rotaLogin);

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
