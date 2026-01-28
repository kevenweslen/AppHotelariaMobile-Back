import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;
    const testUsername = "matheus";
    const testPassword = "123";
    
    if (username === testUsername && password === testPassword) {
        return res.status(200).json({ message: "Login feito com sucesso", user: username });
    } else {
        return res.status(401).json({ message: "Credenciais inválidas" });
    }
};

export default { login };
