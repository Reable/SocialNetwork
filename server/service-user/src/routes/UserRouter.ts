import express, {NextFunction, Request, Response, Router} from "express";
import User from "../core/system/User";

const router: Router = express.Router();

router.post('/authorization', (req:Request, res: Response, next: NextFunction) => {
    User.authorization(req.body || {})
        .then(data => res.status(200).json({message: "Success", data}))
        .catch(err => next(err));
});

router.post('/registration',(req:Request, res: Response, next: NextFunction) => {
    User.registration(req.body || {})
        .then(data => res.status(200).json({message: "Success", data}))
        .catch(err => next(err));
});

router.post('/passwordRecovery', (req:Request, res: Response, next: NextFunction) => {
    User.passwordRecovery(req.body || {})
        .then(data => res.status(200).json({message: "Success", data}))
        .catch(err => next(err));
});

export default router;