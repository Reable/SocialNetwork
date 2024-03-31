import {Validator} from "node-input-validator";
import {LoginUser, RegisterUser} from "../../../controllers/Users/types.ts";
import UserController from "../../../controllers/Users/UserController.ts";
import {IUser} from "../../../collections/users/types.ts";
import {findUser} from "../../../collections/users/users.ts";

export default {
    async register(body: RegisterUser){
        const validate = new Validator(body, {
            "login": "required|string|maxLength:99",
            "email": "required|string|email",
            "name": "required|string",
            "date_birth": "required|after:2000-01-01",
            "password": "required|string|minLength:6",
        })

        if(await validate.fails()){
            throw {errors: validate.errors}
        }
        return await UserController.register(body)
    },

    async authorization(body: LoginUser){
        const validate = new Validator(body, {
            "login": "required|string|minLength:3",
            "password": "required|string|minLength:6",
        })

        if(await validate.fails()){
            throw {errors: validate.errors}
        }
        return await UserController.login(body)
    },

    async update(body:any, user: IUser){
        const validate = new Validator(body, {
            "login": "string|maxLength:99",
            "email": "string|email",
            "name": "string",
            "date_birth": "after:2000-01-01",
            "password": "string|minLength:6",
        })

        if(await validate.fails()){
            throw {errors: validate.errors}
        }

        return await UserController.update(body, user)
    },
}