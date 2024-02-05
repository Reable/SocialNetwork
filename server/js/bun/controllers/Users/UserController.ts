import {createUser, findUser, getUserId} from "../../collections/users/users.ts";
import {LoginUser, ResponseToken, RegisterUser} from "./types.ts";
import {createToken} from "../../helpers/jwt";
import {IUser} from "../../collections/users/types.ts";


export default {
    async register(data:RegisterUser): Promise<ResponseToken>{
        try{
            data.password = await Bun.password.hash(data.password, "argon2id");

            let userId = await createUser(data)
            let user =  await getUserId(userId[0].insertId);

            let token: string = await createToken({id: user.id, login: user.login})
            return { token }
        } catch(err){
            throw err
        }
    },

    async login(data:LoginUser): Promise<ResponseToken>{
        const user = await findUser({
            login:data.login
        });

        if(!user){
            throw {message: 'Not found user', status: 404}
        }

        const argonHash:string  = user.password ?? "";
        const checkPassword = await Bun.password.verify(data.password, argonHash);
        if(!checkPassword){
            throw {status: 402, message: "Incorrect login or password"}
        }

        let token: string = await createToken({id: user.id, login: user.login})
        return { token }
    },

    async userByLogin(data: string):Promise<any>{
        const user = await findUser({ data })

        if(!user){
            throw {status: 404, message: "User not found"}
        }

        return {
            user: {
                login: user.login,
                email: user.email,
                name: user.name,
                date_birth: user.date_birth,
                description: user.description,
                status: user.status,
                image: user.image,
            }
        }

    },
}