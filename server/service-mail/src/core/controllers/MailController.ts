import Validator from "../helpers/validator";

class MailController{

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
        validator.validate(data);

        const text = await this._mailText.registrationText(data.email)
        await this._transporterMail.sendMail(text)
    }
}

export default MailController;