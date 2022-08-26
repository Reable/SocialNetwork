import type {IDataAuthorization, IDataRegistration, IUser} from "../helpers/interface";
import jwt from "jsonwebtoken";

class User {

    _userStorage;
    _tokenSettings;

    constructor(userStorage, tokenSettings) {
        this._userStorage = userStorage;
        this._tokenSettings = tokenSettings;
    }

    async authorization(_data: IDataAuthorization, _headers):Promise<string> {
        return 'hello world';
    }

    async registration(data: IDataRegistration, _headers):Promise<string> {
        const user: IUser = await this._userStorage.createNewUser(data)
        return await this.generateToken(user);
    }

    async generateToken(user: IUser):Promise<string> {
        return jwt.sign(
            {
                ...user
            },
            await this._tokenSettings.JWT_KEY,
            { expiresIn: this._tokenSettings.JWT_LIFE }
        )
    }
}

export default User;