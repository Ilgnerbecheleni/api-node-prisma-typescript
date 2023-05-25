import crypto from 'crypto';
import multer from "multer";
import { extname, resolve } from 'path';
import fs from 'fs';


export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`

                    return callback(null, fileName)
                }
            })
        }
    },
    delete(filePath: string) {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Arquivo excluído com sucesso!');
        });
    }
}
