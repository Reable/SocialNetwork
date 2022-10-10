import MessageStorage from "../storage/MessageStorage";
import UserStorage from "../storage/UserStorage";
import Message from "../controllers/Message";

export default new Message(MessageStorage, UserStorage)