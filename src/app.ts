import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());

app.get("/query", (req: Request, res: Response, next:NextFunction) =>{
  const nome = req.query.nome
  console.log("Cliente digitou: ", nome);
  res.send(`Você digitou o nome: ${nome}`)
})

app.get("/parametro/:nome", (req: Request, res: Response, next:NextFunction) =>{
  const nome = req.params.nome
  console.log("Rota de parametro - Cliente digitou: ", nome);
  res.send(`Você digitou o nome: ${nome}`)
})

app.get("/exemplo", (req: Request, res: Response, next:NextFunction) =>{
  console.log('aconteceu algo');
  res.send('rodou tudo certo')

});


app.get("/corpo", (req: Request, res: Response, next:NextFunction) =>{
  const nome = req.body.nome;
  console.log(nome);
  res.send(`Variavel dentro do corpo - você digitou o nome:  ${nome}`);

});



// rota de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Erro na requisição");

});


export default app;
