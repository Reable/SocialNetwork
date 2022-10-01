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
        validator.setRules('close', Validator.TYPES.number().required());

        validator.validate(data);

        const [createChat]: [IChat] = await this._messageStorage.createChat({data,user})
        return createChat;
    }

}

export default Message