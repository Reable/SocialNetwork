import Validator from "../helpers/validator";

class Mail {

    _mailStorage;
    _transporterMail;
    _mailText;

    constructor(mailStorage, transporterMail, mailText) {
        this._mailStorage = mailStorage;
        this._transporterMail = transporterMail;
        this._mailText = mailText;
    }


    async registrationMail(data){
        const validator = new Validator();

        validator.setRules('email', Validator.TYPES.string().email().required());
        validator.setRules('name', Validator.TYPES.string().required());
        validator.setRules('surname', Validator.TYPES.string().required());
        validator.setRules('password', Validator.TYPES.string().required());

        validator.validate(data);

        const text = await this._mailText.registrationText(data);
        await this._transporterMail.sendMail(text);

        return true;
    }
}

export default Mail;