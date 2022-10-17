import type {IUser} from "../helpers/User/interface";
import type {
    CreateMessage,
    DBCreatePrivateChat,
    IChat,
    IDataCreateChat,
    IPrivateChat
} from '../helpers/Message/interface';
import Validator from "../helpers/validator";
import {PrivateChatNotFound, UserNotFound, YouNotMemberThisChat} from "../Errors";
import {ActiveChat} from "../helpers/Message/enums";

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

        const [searchUser] = await this._userStorage.findUser({id: data.user_id});

        if(!searchUser){
            throw new UserNotFound();
        }

        data.author_id = user.id;

        const [createPrivateChat]: [IPrivateChat] = await this._messageStorage.createPrivateChatDB(data);

        return createPrivateChat;
    }

    async createPrivateMessage (data: CreateMessage, user: IUser): Promise<number> {

        const validator = new Validator();

        validator.setRules('chat_id', Validator.TYPES.number().required());
        validator.setRules('message', Validator.TYPES.string().required());

        validator.validate(data);

        const [searchPrivateChat]: [IPrivateChat] = await this._messageStorage.searchPrivateChat({
            id: data.chat_id,
            active: ActiveChat.CREATED
        });

        if(!searchPrivateChat) {
            throw new PrivateChatNotFound();
        }

        if(searchPrivateChat.user_id !== user.id && searchPrivateChat.author_id !== user.id){
            throw new YouNotMemberThisChat();
        }

        data.author_id = user.id;

        return await this._messageStorage.createMessage(data);
    }

}

export default Message