import type { IDataRegistration, IUser } from "../helpers/interface";
import db from "../services/database";

class UserStorage {

    static USER_TABLE_NAME = "users";

    constructor() {
    }

    async findUser(data){
        return db(UserStorage.USER_TABLE_NAME).where(data);
    }

    async createNewUser(user: IDataRegistration): Promise<IUser>{
        let userObject: IDataRegistration = {
            name: user.name,
            surname: user.surname,
            password: user.password,
            email: user.email,
            role: user.role
        }
        return (await db(UserStorage.USER_TABLE_NAME).insert(userObject).returning('id'))[0];
    }
}

export default new UserStorage;