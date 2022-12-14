import express, {NextFunction, Request, Response, Router} from "express";
import User from "../core/system/Message";
import {onlyRoles} from "../middlewares";
import {UserRole} from "../core/helpers/Enums";

const router: Router = express.Router();

router.post('/createChat',
    onlyRoles([UserRole.USER_ROLE, UserRole.DEVELOPER_ROLE, UserRole.ADMIN_ROLE]),
    (req: Request, res: Response, next: NextFunction) => {
    User.createChat(req.body || {}, req['user'] || {})
        .then(data => res.status(200).json({message: "Success", data}))
        .catch(err => next(err));
});

router.post('/addMemberInChat',
    onlyRoles([UserRole.USER_ROLE, UserRole.DEVELOPER_ROLE, UserRole.ADMIN_ROLE]),
    (req: Request, res: Response, next: NextFunction) => {
        User.addMemberInChat(req.body || {}, req['user'] || {})
            .then(data => res.status(200).json({message: "Success", data}))
            .catch(err => next(err));
    });

router.post('/sendMessage',
    onlyRoles([UserRole.USER_ROLE, UserRole.DEVELOPER_ROLE, UserRole.ADMIN_ROLE]),
    (req: Request, res: Response, next: NextFunction) => {
        User.sendMessage(req.body || {}, req['user'] || {})
            .then(data => res.status(200).json({message: "Success", data}))
            .catch(err => next(err));
    });

router.post('/createPrivateChat',
    onlyRoles([UserRole.USER_ROLE, UserRole.DEVELOPER_ROLE, UserRole.ADMIN_ROLE]),
    (req: Request, res: Response, next: NextFunction) => {
        User.createPrivateChat(req.body || {}, req['user'] || {})
            .then(data => res.status(200).json({message: "Success", data}))
            .catch(err => next(err));
});

router.post('/sendPrivateMessage',
    onlyRoles([UserRole.USER_ROLE, UserRole.DEVELOPER_ROLE, UserRole.ADMIN_ROLE]),
    (req: Request, res: Response, next: NextFunction) => {
        User.sendPrivateMessage(req.body || {}, req['user'] || {})
            .then(data => res.status(200).json({message: "Success", data}))
            .catch(err => next(err));
    });

export default router;