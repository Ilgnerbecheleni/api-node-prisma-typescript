import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
    admin: boolean,
    role:[]
}

export function isAutenticated(req: Request, res: Response, next: NextFunction) {

    const authtoken = req.headers.authorization;

    if (!authtoken) {
        return res.status(401).send({ msg: "Unathorazed" });
    }


    const [, token] = authtoken.split(' ');

    try {
        const { sub, admin, role } = verify(token, process.env.JWT_SECRET) as Payload;
        console.log(role)
        req.user_id = sub;
        req.isAdmin = admin;
        req.role = role;
        return next();
    }
    catch (err) {
        return res.status(401).send({ error: err.message });
    }





}