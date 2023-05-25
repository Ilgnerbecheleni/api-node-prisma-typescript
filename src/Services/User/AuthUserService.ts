import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface Authrequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: Authrequest) {

        const user = await prismaClient.usuario.findFirst({
            where: {
                email: email,
            }
        })

        if (!user) {
            throw new Error("user or password incorrect")
        }

        const verify = await compare(password, user.password);

        if (!verify) {
            throw new Error("user or password incorrect")
        }

        const secret = process.env.JWT_SECRET as string;

        //gerar token
        const token = sign({ id: user.id, name: user.email, role: user.roles }, secret,
            {
                subject: user.id,
                expiresIn: '8h',
                issuer: user.email,
                audience: 'login',

            })

        return { id: user.id, name: user.name, email: user.email, token: token }

    }
}

export default AuthUserService;