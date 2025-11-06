import { Router } from "express";

const router = Router();


router.get("/", ()=>console.log('pegar todas as tarefas'));
router.get("/:id", ()=>console.log('pegar tarefa'));
router.post("/", ()=>console.log('cadastrar um tarefa'));
router.put("/:id", ()=>console.log('atualizar uma tarefa'));
router.delete("/:id", ()=>console.log('deletar uma tarefa'));


export default router;
