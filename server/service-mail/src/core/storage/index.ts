class MailStorage {
    constructor() {
    }

    async testText(email: string){
        return {
            from: '"Ivan 👻" <reabletop@mail.ru>', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        };
    }
}

export default new MailStorage()