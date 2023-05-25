import { Request, Response } from "express";
import AuthUserService from "../../Services/User/AuthUserService";

class AuthUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;
        const authService = new AuthUserService();

        const auth = await authService.execute({ email, password });

        return response.json(auth)

    }
}

export default AuthUserController;