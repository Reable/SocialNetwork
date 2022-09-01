import type {NextFunction, Request, Response} from "express";

export function notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404);
    const err: Error = new Error('Not found '+req.url);
    next(err);
}