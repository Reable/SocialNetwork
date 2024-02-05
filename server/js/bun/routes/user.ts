import server from 'bunrest';
import UserController from "../controllers/Users/UserController.ts";
import UserValidator from "../helpers/validator/user/userValidator.ts";

const route = server().router()

route.post('/register', async (req, res, next) => {
    await UserValidator.register(req.body)
        .then(data => res.status(201).json(data))
        .catch(error => res.status(error.status ?? 400).json(error))
});

route.post('/authorization', async (req, res, next) => {
    await UserValidator.authorization(req.body)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(error.status ?? 400).json(error))
});

route.get('/:login', async (req, res, next) => {
    await UserController.userByLogin(req.params.login)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(error.status ?? 400).json(error))
});


export default route