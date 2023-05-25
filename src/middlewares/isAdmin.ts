import { Request, Response, NextFunction } from "express";


export function isAdmin(req: Request, res: Response, next: NextFunction) {
    const rolesPermitidos = "ADMIN"
    const role = req.role; // Supondo que os dados do usuário estejam no req.body
    const {id }= req.params;
    const userId = req.user_id;


    console.log(id)
    console.log(userId)
    let adm:boolean ;

    role.forEach(element => {
        if(element === rolesPermitidos){
            adm = true;
        }
    });

    if (adm) {
        // Role permitido encontrado, pode prosseguir para o próximo middleware
        next();
    } else {
  // Role não permitido encontrado, enviar resposta de erro
            res.status(403).json({ erro: 'Acesso não autorizado.' });
        }
      
       
    }




