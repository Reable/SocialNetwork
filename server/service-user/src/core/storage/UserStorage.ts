import type {IDataAuthorization, IDataRegistration, IUser} from "../helpers/interface";
import db from "../services/database";

class UserStorage {

    static USER_TABLE_NAME = "users";

    constructor() {
    }

    async findOne(user: IDataAuthorization){
        return db(UserStorage.USER_TABLE_NAME).where(user);
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