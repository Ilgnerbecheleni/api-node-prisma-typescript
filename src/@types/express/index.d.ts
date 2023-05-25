
declare namespace Express {
    export interface Request {
        user_id: string;// sovreescrevendo essa variavel no express
        isAdmin: boolean;
        role:[]
    }
}