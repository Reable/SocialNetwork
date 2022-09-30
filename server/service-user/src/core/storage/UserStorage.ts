import type { IDataRegistration, IUser } from "../helpers/User/interface";
import db from "../services/database";
import {DB_USER} from "../helpers/Enums";

class UserStorage {
    constructor() {
    }

    async findUser(data, select: '*'): Promise<IUser[]>{
        return db(DB_USER.USER_TABLE_NAME).select(select).where(data);
    }

    async createNewUser(user: IDataRegistration): Promise<IUser>{
        let userObject: IDataRegistration = {
            name: user.name,
            surname: user.surname,
            password: user.password,
            email: user.email,
            role: user.role,
            phone: user.phone
        }
        return (await db(DB_USER.USER_TABLE_NAME).insert(userObject).returning('id'))[0];
    }

    async updateUser(user){
        return db(DB_USER.USER_TABLE_NAME).where('id', user.id).update({
            password: user.password
        })
    }
}

export default new UserStorage;