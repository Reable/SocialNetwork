import nodemailer from 'nodemailer';
import type {MailText} from "./Interfaces";
import config from "../../config";
import {MailError} from "../Errors";

class SendMail{
    async sendMail(text: MailText) {
        try {
            const transporter = await nodemailer.createTransport(config.connectMailService);
            await transporter.sendMail(text);
        } catch (err) {
            if (err instanceof Error) {
                throw new MailError(err.message);
            }
        }
    };
}

export default new SendMail();