import MailStorage from "../storage/MailStorage";
import transporterMail from "../services/transporterMail";
import Mail from "../controllers/Mail";

export default new Mail(MailStorage, transporterMail)
