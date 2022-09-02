import express, {NextFunction, Request, Response, Router} from "express";
import Mail from '../core/system/index';

const router: Router = express.Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    Mail.sendMail(req.body || {})
        .then(data => res.json({message: "Success", data}))
        .catch(err => next(err));
})

export default router;