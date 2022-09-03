class MailStorage {
    constructor() {
    }

    async registrationText(email: string){
        return {
            from: '"Ivan 👻" <reabletop@mail.ru>', // sender address
            to: email, // list of receivers
            subject: "Complete registration on service socialNetwork", // Subject line
            text: "Thank for registration", // plain text body
            html: "<b>Thank for registration</b>", // html body
        };
    }
}

export default new MailStorage()