import prismaClient from "../../prisma/index";
import { hash } from "bcryptjs";


interface UserRquest {
    name: string;
    email: string;
    password: string;
    avatar: string;
    roles: []
}

class CreateUserService {



    async execute({ name, email, password, avatar, roles }: UserRquest) {

        //verificar se ele enviou email
        if (!email) {
            throw new Error("email is required");
        }

        //verifica se ja existe

        const useraleradexists = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if (useraleradexists) {
            throw new Error("User aleardy  is exists!!");
        }

        const passwordhash = await hash(password, 8);



        const cliente = await prismaClient.usuario.create({
            data: {
                name: name,
                email: email,
                password: passwordhash,
                avatar: avatar,
                roles: roles
            }
            ,
            select: {
                id: true,
                name: true,
                email: true,
            }

        })

        return cliente;

    }


}


export default CreateUserService;