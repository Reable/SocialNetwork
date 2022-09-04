import User from "../controllers/User";
import UserStorage from "../storage/UserStorage";
import { JWT_KEY, JWT_LIFE } from "../../config";
import Requests from "../services/requests";


export default new User( UserStorage, { JWT_KEY, JWT_LIFE }, Requests );