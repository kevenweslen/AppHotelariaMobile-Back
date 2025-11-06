import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());

//exibição por query
app.get("/query", (req:Request, res:Response, next:NextFunction)=>{
  const nome = req.query.nome
  console.log("cliente digitou: ", nome);
  res.send(`você digitou o nome: ${nome} </br>
▒▒▒░░░░░░░░░░▄▐░░░░ </br>
▒░░░░░░▄▄▄░░▄██▄░░░ </br>
░░░░░░▐▀█▀▌░░░░▀█▄░ </br>
░░░░░░▐█▄█▌░░░░░░▀█▄ </br>
░░░░░░░▀▄▀░░░▄▄▄▄▄▀▀ </br>
░░░░░▄▄▄██▀▀▀▀░░░░░ </br>
░░░░█▀▄▄▄█░▀▀░░░░░░ </br>
░░░░▌░▄▄▄▐▌▀▀▀░░░░░ </br>
░▄░▐░░░▄▄░█░▀▀░░░░░ </br>
░▀█▌░░░▄░▀█▀░▀░░░░░ </br>
░░░░░░░░▄▄▐▌▄▄░░░░░ </br>
░░░░░░░░▀███▀█░▄░░░ </br>
░░░░░░░▐▌▀▄▀▄▀▐▄░░░ </br>
░░░░░░░▐▀░░░░░░▐▌░░ </br>
░░░░░░░█░░░░░░░░█░░ </br>
░░░░░░▐▌░░░░░░░░░█░       </br>
    `);
});

app.get("/corpo", (req:Request, res:Response, next:NextFunction)=>{
  const nome = req.body.nome
  console.log("variavel dentro do corpo: ", nome);
  res.send(`sua variavel/resposta é: ${nome}`);
});

//exibição por parametro
app.get("/parametro/:nome", (req:Request, res:Response, next:NextFunction)=>{
  const nome = req.params.nome
  console.log("Rota de parametro: ", nome);
  res.send(`você digitou o nome: ${nome}`);
});

app.get("/exemplo", (req:Request, res:Response, next:NextFunction)=>{
  console.log('Aconteceu algo')
  res.send("Rodou no servidor")
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.send("hello Word!!");
});

//rota de erro
app.use((req: Request, res: Response, next: NextFunction) => {
  res.send("hello Word!!");
});

export default app;
