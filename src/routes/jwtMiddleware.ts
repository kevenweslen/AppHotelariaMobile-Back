import { Request, Response, NextFunction } from "express"
import { verifyJWT } from "../utils/jwt"

export function middleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({message: "Token not provided"})
  }

  const token = authHeader?.split(" ")[1]!
  const payload = verifyJWT(token)
  if (payload === undefined) {
    return res.status(401).json({message: "Expired token"})
  }
  (req as any).payload = payload
  next()
}