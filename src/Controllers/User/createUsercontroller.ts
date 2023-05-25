import { Request, Response } from "express";
import CreateUserService from "../../Services/User/createUserService";

class CreateUsercontroller {
    async handle(request: Request, response: Response) {
        const { name, email, password, roles } = request.body;

        const createUserService = new CreateUserService();

        if (!request.file) {
            throw new Error("error upload file")
        } else {
            const { originalname, filename: avatar } = request.file;

            const user = await createUserService.execute({ name, email, password, avatar, roles })
            return response.json(user);
        }


    }
}

export default CreateUsercontroller 