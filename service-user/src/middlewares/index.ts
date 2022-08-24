// import httpErrors from "http-errors";
import type { Request, Response, NextFunction } from "express";

export function notFound(req: Request, res:Response, next:NextFunction){
    res.status(404);
    const err: Error = new Error('Not Found ' + req.url);
    next(err)
}
