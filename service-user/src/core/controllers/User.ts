import type {IDataAuthorization, IDataRegistration} from "../helpers/interface";


class User {

    _userStorage;

    constructor(userStorage) {
        this._userStorage = userStorage;
    }

    async authorization(_data: IDataAuthorization, _headers):Promise<string> {
        return 'hello world';
    }

    async registration(data: IDataRegistration, _headers) {
        return await this._userStorage.createNewUser(data);
    }


}

export default User;