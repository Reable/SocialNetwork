import type {IDataAuthorization, IDataRegistration, IRecoveryPassword, IUser} from "../helpers/User/interface";
import jwt from "jsonwebtoken";
import {HEADERS, UserRole} from "../helpers/Enums";
import Validator from "../helpers/validator";
import {BadRequestError, InsufficientRole, InvalidCredentials, SessionExpired, UnAuthorized} from "../Errors";
import bcryptjs from "bcryptjs";
import Mail from "../system/Mail";

class User {

    _userStorage;
    _tokenSettings;

    static ROLES: any = {
        "user": UserRole.USER_ROLE,
        "admin": UserRole.ADMIN_ROLE,
        "developer": UserRole.DEVELOPER_ROLE,
    }

    constructor(userStorage, tokenSettings) {
        this._userStorage = userStorage;
        this._tokenSettings = tokenSettings;
    }

    async whoami(data, headers): Promise<IUser>{
        if (!headers[HEADERS.AuthTokenName] && !data.token){
            throw new UnAuthorized('User is not authorization');
        }

        data.token = headers[HEADERS.AuthTokenName]?.split(' ')[1] || data.token;

        let validator = new Validator();

        validator.setRules('token', Validator.TYPES.string().required());
        validator.setRules('roles', Validator.TYPES.array().required());

        validator.validate(data);

        const decodedToken = await this.verifyToken(data.token);

        if (Date.now() / 1000 > decodedToken.exp) {
            throw new SessionExpired('Session expired');
        }

        const [user]: [IUser] = await this._userStorage.findUser({id: decodedToken.id})

        const rolesSuccess: any = [];

        for (let role of data.roles){
            rolesSuccess.push(User.ROLES[role]);
        }

        if (!rolesSuccess.includes(user.role)){
            throw new InsufficientRole();
        }

        return user;
    }

    async passwordRecovery(data: IRecoveryPassword){
        const [user]: [IUser] = data.email
            ? await this._userStorage.findUser({ email: data.email })
            : await this._userStorage.findUser({ phone: data.phone })

        if (!user) {
            throw new BadRequestError('User not found')
        }

        const password = await this.generateString(10);
        const hashNewPassword = await bcryptjs.hash(password, 5);

        const updatePassword = await this._userStorage.updateUser({ id: user.id, password: hashNewPassword });

        user.password = password;

        await Mail.passwordRecovery(user);

        return {updatePassword};
    }

    async authorization(data: IDataAuthorization):Promise<string> {
        const validator = new Validator();

        validator.setRules('email', Validator.TYPES.string().required());
        validator.setRules('password', Validator.TYPES.string().required());

        validator.validate(data)

        const [user]: [IUser] = await this._userStorage.findUser({email: data.email});

        if(!user) {
            throw new InvalidCredentials("No user with specified email found");
        }

        const checkPassword: boolean = await bcryptjs.compare(data.password, user.password);

        if (!checkPassword) {
            throw new UnAuthorized('You entered the wrong account password')
        }

        return await this.generateToken(user);
    }

    async registration(data: IDataRegistration): Promise<string> {
        const validator = new Validator();

        validator.setRules('email', Validator.TYPES.string().required());
        validator.setRules('name', Validator.TYPES.string().required());
        validator.setRules('surname', Validator.TYPES.string().required());
        validator.setRules('password', Validator.TYPES.string().required());
        validator.setRules('phone', Validator.TYPES.string().min(0));

        validator.validate(data);

        const checkExist: [IUser] = await this._userStorage.findUser({ email: data.email });

        if (checkExist.length) {
            throw new BadRequestError("User already exists");
        }

        await Mail.registrationMail(data);

        data.password = await bcryptjs.hash(data.password, 5);

        const idUser: IUser = await this._userStorage.createNewUser({ ...data, role: UserRole.USER_ROLE });

        return await this.generateToken(idUser);
    }

    async generateToken(user: IUser):Promise<string> {
        return jwt.sign(
            { ...user },
            await this._tokenSettings.JWT_KEY,
            { expiresIn: this._tokenSettings.JWT_LIFE }
        );
    }

    async verifyToken(token: string) {
        return jwt.verify(token, this._tokenSettings.JWT_KEY);
    }

    async generateString(length: number):Promise<string> {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}

export default User;