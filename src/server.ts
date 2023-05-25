import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'
import { router } from "./routes";
import cors from 'cors'
import path from 'path'

const app = express();


app.use(express.json());
app.use(cors())

app.use(router);
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))  //libera o acesso as fotos


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        //se for uma instancia do tipo erro lança 
        res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ status: 'error', message: "internal server error" })
})


app.listen(3333, () => {
    console.log("Server is running on 3333");
});

