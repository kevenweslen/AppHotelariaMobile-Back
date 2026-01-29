import {Request, Response, NextFunction} from "express";

async function criarLogin(req: Request, res: Response, next:NextFunction){
  try{
    const email = "keven.wafonsea@gmail.com";
    const senha = 123;
    console.log("informações cadastradas: ", email, senha);


  }catch(error){
    console.log("Erro ao criar", error)
    return res.status(404).json({erro:"dados imcompletos"});
  };
};

export default {
  criarLogin
}