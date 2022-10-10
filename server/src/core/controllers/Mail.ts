import Validator from "../helpers/validator";
import type {IUser} from "../helpers/User/interface";

class Mail {

    _mailStorage;
    _transporterMail;

    constructor(mailStorage, transporterMail) {
        this._mailStorage = mailStorage;
        this._transporterMail = transporterMail;
    }

    async passwordRecovery(user: IUser):Promise<boolean> {
        const validator = new Validator();

        validator.setRules('id', Validator.TYPES.number().required());
        validator.setRules('role', Validator.TYPES.string().required());
        validator.setRules('name', Validator.TYPES.string().required());
        validator.setRules('surname', Validator.TYPES.string().required());
        validator.setRules('email', Validator.TYPES.string().email().required());
        validator.setRules('phone', Validator.TYPES.string().min(0));
        validator.setRules('password', Validator.TYPES.string().required());

        validator.validate(user);
        const text = await this._mailStorage.passwordRecovery(user);
        await this._transporterMail.sendMail(text);

        return true;
    }


    async registrationMail(data): Promise<boolean>{
        const validator = new Validator();

        validator.setRules('email', Validator.TYPES.string().email().required());
        validator.setRules('name', Validator.TYPES.string().required());
        validator.setRules('phone', Validator.TYPES.string().min(0));
        validator.setRules('surname', Validator.TYPES.string().required());
        validator.setRules('password', Validator.TYPES.string().required());

        validator.validate(data);

        const text = await this._mailStorage.registrationText(data);
        await this._transporterMail.sendMail(text);

        return true;
    }
}

export default Mail;