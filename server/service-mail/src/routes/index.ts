import express, {NextFunction, Request, Response, Router} from "express";
import Mail from '../core/system/index';

const router: Router = express.Router();

router.post('/registration', (req: Request, res: Response, next: NextFunction) => {
    Mail.registrationMail(req.body || {})
        .then(data => res.json({message: "Success", data}))
        .catch(err => next(err));
})



export default router;