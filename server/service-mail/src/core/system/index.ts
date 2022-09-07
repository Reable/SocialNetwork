import Mail from "../controllers/Mail";
import MailStorage from "../storage/index";
import SendMail from '../helpers/index';

export default new Mail(MailStorage, SendMail);
