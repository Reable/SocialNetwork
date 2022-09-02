class MailController{

    _mailStorage;
    _transporterMail;
    _mailText;

    constructor(mailStorage, transporterMail, mailText) {
        this._mailStorage = mailStorage;
        this._transporterMail = transporterMail;
        this._mailText = mailText;
    }


    async sendMail(data){
        console.log(data)
        const text = await this._mailText.testText(data.email)
        await this._transporterMail.sendMail(text)
    }
}

export default MailController;