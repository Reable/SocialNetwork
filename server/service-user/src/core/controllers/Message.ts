import type {IUser} from "../helpers/User/interface";
import type {IChat, IDataCreateChat} from '../helpers/Message/interface';
import Validator from "../helpers/validator";

class Message {

    _messageStorage;

    constructor(messageStorage){
        this._messageStorage = messageStorage;
    }

    async createChat(data: IDataCreateChat, user: IUser): Promise<IChat>{
        const validator = new Validator();

        validator.setRules('title', Validator.TYPES.string().required());
        validator.setRules('image', Validator.TYPES.string());
        validator.setRules('close', Validator.TYPES.string().required());

        validator.validate(data);

        const [_createChat] = await this._messageStorage.create({...data, ...user})

        return;
    }

}

export default Message