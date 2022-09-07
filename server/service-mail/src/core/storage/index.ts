import type {IUser} from "../helpers/Interfaces";

class MailStorage {
    constructor() {
    }

    async passwordRecovery(data: IUser ){
        return {
            from: '"Ivan 👻" <reabletop@mail.ru>', // sender address
            to: data.email,
            subject: "Recovery password on service socialNetwork",
            text: "",
            html: `
                <h1>${data.name} ${data.surname} наша команда предоставляет вам временный пароль для входа в аккаунт</h1>
                <h2>${data.password}</h2>
            `,
        };
    }

    async registrationText(data: IUser ){
        return {
            from: '"Ivan 👻" <reabletop@mail.ru>', // sender address
            to: data.email,
            subject: "Complete registration on service socialNetwork",
            text: "Thank for registration",
            html: `
                <h1>${data.name} ${data.surname} благодарим за регистрацию в нашем портале</h1>
                <table>
                    <tr style="padding: 10px; text-center; border: 2px solid gray;">
                        <td>Ваша почта</td>
                        <td>Ваш пароль от аккаунта</td>
                    </tr>
                    <tr style="padding: 10px; text-center; border: 2px solid gray;">
                        <td>${data.email}</td>
                        <td>${data.password}</td>
                    </tr>
                </table>
            `,
        };
    }
}

export default new MailStorage()