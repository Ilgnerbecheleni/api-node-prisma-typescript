import { Request, Response } from "express";
import DeleteUserService from "../../Services/User/DeleteUserService";

class DeleteUserController {
    async handle(request: Request, response: Response) {

        const user_id = request.user_id;
        

        const detailUserService = new DeleteUserService();
        const user = await detailUserService.execute(user_id);

        response.json({message:`usuario: ${user.name} deletado com sucesso !`});


    }
}

export default DeleteUserController;