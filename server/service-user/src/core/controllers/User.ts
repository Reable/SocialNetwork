import type {IDataAuthorization, IDataRegistration, IUser} from "../helpers/interface";
import jwt from "jsonwebtoken";
import {UserRole} from "../helpers/Enums";
import Validator from "../helpers/validator";
import { BadRequestError, InvalidCredentials, UnAuthorized } from "../Errors";
import bcryptjs from "bcryptjs";

class User {

    _userStorage;
    _tokenSettings;

    constructor(userStorage, tokenSettings) {
        this._userStorage = userStorage;
        this._tokenSettings = tokenSettings;
    }

    async authorization(data: IDataAuthorization, _headers):Promise<string> {
        const validator = new Validator();

        validator.setRules('email', Validator.TYPES.string().required());
        validator.setRules('password', Validator.TYPES.string().required());

        validator.validate(data)

        const [user] = await this._userStorage.findUser({email: data.email})

        if(!user) {
            throw new InvalidCredentials("No user with specified email found");
        }

        const checkPassword: boolean = await bcryptjs.compare(data.password, user.password);

        if (!checkPassword) {
            throw new UnAuthorized('You entered the wrong account password')
        }

        return await this.generateToken(user.id);
    }

    async registration(data: IDataRegistration, _headers): Promise<string> {

        const validator = new Validator();

        validator.setRules('email', Validator.TYPES.string().required())
        validator.setRules('name', Validator.TYPES.string().required())
        validator.setRules('surname', Validator.TYPES.string().required())
        validator.setRules('password', Validator.TYPES.string().required())

        validator.validate(data);

        const checkExist: [IUser] = await this._userStorage.findOneUser(data);

        if (checkExist.length) {
            throw new BadRequestError("User already exists");
        }

        data.password = await bcryptjs.hash(data.password, 5);

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