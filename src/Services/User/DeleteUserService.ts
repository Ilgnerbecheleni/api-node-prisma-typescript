import prismaClient from "../../prisma";

class DeleteUserService {
    async execute(id) {
        const user = await prismaClient.usuario.delete({
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

export default DeleteUserService;