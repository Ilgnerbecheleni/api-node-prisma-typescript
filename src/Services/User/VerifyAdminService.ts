import prismaClient from "../../prisma";

class VerifyAdminService {
    async execute(id) {
        const user = await prismaClient.usuario.findFirst({
            where: {
                id: id
            },
            select: {
                roles: true,
            }
        })

        return user
    }
}

export default VerifyAdminService;