import { Request, Response, NextFunction } from "express";


export function isyou(req: Request, res: Response, next: NextFunction) {
   
    const {id }= req.params;
    const userId = req.user_id;
  
      if (id==userId) {
        // Role permitido encontrado, pode prosseguir para o próximo middleware
        next();
    } else {
  // Role não permitido encontrado, enviar resposta de erro
            res.status(403).json({ erro: 'Acesso não autorizado.' });
        }
      
       
    }




