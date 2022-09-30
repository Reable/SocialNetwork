import express, {NextFunction, Request, Response, Router} from "express";
import User from "../core/system/Message";
import {onlyRoles} from "../middlewares";
// import User from "../core/system/User";

const router: Router = express.Router();

router.post('/createChat',onlyRoles(['*']), (req:Request, res: Response, next: NextFunction) => {
    User.createChat(req.body || {}, req.user || {})
        .then(data => res.status(200).json({message: "Success", data}))
        .catch(err => next(err));
});

export default router;