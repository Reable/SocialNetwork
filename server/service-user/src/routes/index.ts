import express, {NextFunction, Request, Response, Router} from "express";
import User from "../core/system/User";
// import {onlyRoles} from "../middlewares";

const router: Router = express.Router();

router.post('/authorization', (req:Request, res: Response, next: NextFunction) => {
    User.authorization(req.body || {}, req.headers || {})
        .then(data => res.status(200).json({message: "Success", data}))
        .catch(err => next(err));
});

router.post('/registration', (req:Request, res: Response, next: NextFunction) => {
    User.registration(req.body || {}, req.headers || {})
        .then(data => res.status(200).json({message: "Success", data}))
        .catch(err => next(err));
});

router.post('/passwordRecovery', (req:Request, res: Response, next: NextFunction) => {
    User.passwordRecovery(req.body || {}, req.headers || {})
        .then(data => res.status(200).json({message: "Success", data}))
        .catch(err => next(err));
});

router.post('/whoami', (req: Request, res: Response, next: NextFunction) => {
    User.whoami(req.body || {}, req.headers || {})
        .then(data => res.status(200).json({message: "Success", data}))
        .catch(err => next(err));
})

export default router;