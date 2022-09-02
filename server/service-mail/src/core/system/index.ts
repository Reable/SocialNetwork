import Mail from "../controllers/MailController";
import MailStorage from "../storage/index";
import SendMail from '../helpers/index';
import MailText from "../storage/index";

export default new Mail(MailStorage, SendMail, MailText);
