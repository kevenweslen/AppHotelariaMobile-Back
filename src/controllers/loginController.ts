import {Request, Response, NextFunction} from "express";
import loginRepositories, { validarLogin } from "../repositories/loginRepositories";
  import {validarSenha} from "../utils/senha";
  import { createJWT } from "../utils/jwt";

async function criarLogin(req: Request, res: Response, next:NextFunction){
  const {email, senha} = req.body

  if(!email || !senha){
    return res.status(400).json({erro:"Email e senha são obrigatorios"})
  }
  
  if(email.trim() === "" || senha.trim() === ""){
    return res.status(401).json({erro: "Email e senha estão vazios"})
    
  }

  try{
    const result = await loginRepositories.validarLogin(email)
    
    const resultSenha = await validarSenha(senha, result.senha)
    if(!resultSenha){throw new Error("senha invalida")}

    const {senha:_senha, ...usuario} = result
    //cria o token do usuario
    const token = createJWT(usuario)
    return res.status(200).json(token)

    return res.status(200).json(result);
  }
  catch (error){
    console.log("erro:", error)
    return res.status(400).json({erro: "credenciais invalidas"})
  }  
}

export default {
  criarLogin
}