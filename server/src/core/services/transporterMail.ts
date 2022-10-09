import nodemailer from 'nodemailer';
import {MailData} from "../../config";

class transporterMail {
    async sendMail(data) {
        try {
            console.log(MailData)
            const transporter: nodemailer = nodemailer.createTransport({
                host: "smtp.mail.ru",
                port: 465,
                secure: true,
                auth: {
                    user: MailData.user,
                    pass: MailData.password,
                },
            });

            await transporter.sendMail(data);
            return {message: "Success"}
        } catch (err) {
            return {message: "Error", error: err}
        }

    }
}

export default new transporterMail();