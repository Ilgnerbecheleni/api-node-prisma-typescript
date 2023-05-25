import { Request, Response } from "express";
import DetailUserService from "../../Services/User/DetailUserService";

class DetailUserController {
    async handle(request: Request, response: Response) {

        const user_id = request.user_id;


        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute(user_id);
        if(user){
            response.json(user);
        }
        else{
            response.status(400).json({message:"User not found"});
        }
     


    }
}

export default DetailUserController;