import {decodeToken} from "../helpers/jwt";
import {decode} from "jsonwebtoken";
import {findUser} from "../collections/users/users.ts";

export async function auth(req: any, res: any, next: any){
    const bearer = req.headers.authorization

    if(!bearer){
        return res.status(401).json({status: 401, message: 'Login failed'});
    }

    const token = bearer.split(' ')[1];
    if(!token){
        return res.json('Auth failed').status(401);
    }

    const { id } = await decodeToken(token);

    const user = await findUser({ id })
    if(!user){
        return res.json('Auth failed').status(401);
    }

    req.user = user
}