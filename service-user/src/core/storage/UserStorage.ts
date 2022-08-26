import type { IDataRegistration, IUser } from "../helpers/interface";

class UserStorage {
    constructor() {
    }

    async createNewUser(user: IDataRegistration): Promise<IUser>{
        return { ...user, id:1 };
    }
}

export default new UserStorage;