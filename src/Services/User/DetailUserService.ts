import prismaClient from "../../prisma";

class DetailUserService {
    async execute(id) {
        const user = await prismaClient.usuario.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                email: true,
                name: true,
                roles: true
            }
        })
        
        return user
    }
}

export default DetailUserService;