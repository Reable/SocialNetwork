import type {IUser} from "../helpers/User/interface";
import type {
    DBCreatePrivateChat,
    IChat,
    IDataCreateChat,
    IPrivateChat
} from '../helpers/Message/interface';
import Validator from "../helpers/validator";
import {UserNotFound} from "../Errors";

class Message {

    _messageStorage;
    _userStorage;

    constructor(messageStorage, userStorage){
        this._messageStorage = messageStorage;
        this._userStorage = userStorage;
    }

    async createChat(data: IDataCreateChat, user: IUser): Promise<IChat>{
        const validator = new Validator();

        validator.setRules('title', Validator.TYPES.string().required());
        validator.setRules('image', Validator.TYPES.string());
        validator.setRules('close', Validator.TYPES.number().required());

        validator.validate(data);

        const [createChat]: [IChat] = await this._messageStorage.createChatDB({data,user})
        return createChat;
    }

    async createPrivateChat(data:DBCreatePrivateChat, user: IUser ): Promise<IPrivateChat>{
        const validator = new Validator();

        validator.setRules('user_id', Validator.TYPES.number().required());

        validator.validate(data);

        const searchUser = await this._userStorage.findUser({id: data.user_id});
        console.log(searchUser);
        if(!searchUser){
            throw new UserNotFound();
        }

        data.author_id = user.id;

        const [createPrivateChat]: [IPrivateChat] = await this._messageStorage.createPrivateChatDB(data);
        console.log(createPrivateChat.id)
        return createPrivateChat;
    }

}

export default Message