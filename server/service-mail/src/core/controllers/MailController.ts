class MailController{

    _mailStorage;

    constructor(mailStorage) {
        this._mailStorage = mailStorage;
    }


    async sendMail(_data, _headers){
        return true
    }
}

export default MailController;