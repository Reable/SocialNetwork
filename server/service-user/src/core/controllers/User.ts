import type {IDataAuthorization, IDataRegistration, IUser} from "../helpers/interface";
import jwt from "jsonwebtoken";
import {UserRole} from "../helpers/Enums";

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
        const idUser: IUser = await this._userStorage.createNewUser({ ...data, role: UserRole.USER_ROLE });
        return await this.generateToken(idUser);
    }

    async generateToken(idUser: IUser):Promise<string> {
        return jwt.sign(
            { id: idUser },
            await this._tokenSettings.JWT_KEY,
            { expiresIn: this._tokenSettings.JWT_LIFE }
        );
    }

    async verifyToken(token: string) {
        return jwt.verify(token, this._tokenSettings.JWT_KEY);
    }
}

export default User;