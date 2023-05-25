import { Router, Request, Response } from "express";
import multer from "multer";
import CreateUsercontroller from "./Controllers/User/createUsercontroller";
import AuthUserController from "./Controllers/User/AuthUserController";
import DetailUserController from "./Controllers/User/DetailUserController";
import uploadConfig from './config/multer'
import { isAutenticated } from "./middlewares/isAuthenticated";
import { isAdmin } from "./middlewares/isAdmin";
import DeleteUserController from "./Controllers/User/DeleteUserController";
import { isyou } from "./middlewares/isYou";
const router = Router()

const upload = multer(uploadConfig.upload("./tmp"));


router.get('/home', (req: Request, res: Response) => {
    return res.json({ Api: "Versão 1.0.0" })
})


//rotas de usuario
router.post('/users', upload.single('file'), isAutenticated, isAdmin, new CreateUsercontroller().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAutenticated, new DetailUserController().handle)
router.delete('/users/:id', isAutenticated,isAdmin,isyou, new DeleteUserController().handle)


//rotas categoria



//rotas produtos

export { router }