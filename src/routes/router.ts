import { Router } from "express";
import router from "./tarefasRoutes";
import { createJWT } from "../utils/jwt";
import { middleware } from "./jwtMiddleware";

const hendlerRouter = Router();

//rotas bublicas
hendlerRouter.use("/task", router)


// hendlerRouter.use("/login", () => {
//     console.log("esta na rota login")
// })


// hendlerRouter.use("/jwt", (req, res) => {
//     const playload = {
//         id:123,
//         name: "keven",
//         roles: "cliente",
//     }
//     res.json(createJWT(playload))
// })

// //rotas privadas
// hendlerRouter.get("/jwttest", middleware, (req, res) => {
//     res.json("passou pelo JWT middleware")
// })

export default hendlerRouter;