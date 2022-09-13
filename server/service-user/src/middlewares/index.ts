// import httpErrors from "http-errors";
import type { Request, Response, NextFunction } from "express";
import User from "../core/system/User";

export function notFound(req: Request, res:Response, next:NextFunction){
    res.status(404);
    const err: Error = new Error('Not Found ' + req.url);
    next(err)
}

export function onlyRoles(roles: string[],){
    return async function (req: Request, _res: Response, next: NextFunction) {
        try{
            req.user = await User.whoami({roles}, req.headers);
        } catch (err){
            if (err instanceof Error){
                next(err)
            }
        }
        next()
    }
}

