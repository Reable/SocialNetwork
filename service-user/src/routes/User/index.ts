import express, {NextFunction, Request, Response, Router} from "express";
import User from "../../core/system/User";

const router: Router = express.Router();

router.post('/authorization', (req:Request, res: Response, next: NextFunction) => {
    User.authorization(req.body || {}, req.headers || {})
        .then(data => res.status(200).json({message: "Success", data}))
        .catch(err => next(err));
});

export default router