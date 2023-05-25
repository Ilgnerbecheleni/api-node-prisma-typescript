import { Request, Response } from "express";
import DetailUserService from "../../Services/User/DetailUserService";

class DetailUserController {
    async handle(request: Request, response: Response) {

        const user_id = request.user_id;


        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute(user_id);

        response.json(user);


    }
}

export default DetailUserController;