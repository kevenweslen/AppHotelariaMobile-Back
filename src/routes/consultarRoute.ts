import { Router } from "express";
import consultarController from "../controllers/consultarController";

const rotaConsultar = Router();

rotaConsultar.get("/consultar", consultarController.getAvaibleRooms);
export default rotaConsultar;