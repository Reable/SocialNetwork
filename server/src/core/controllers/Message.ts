import type {IUser} from "../helpers/User/interface";
import type {
    AddMemberWithChat,
    CreateMessage,
    DBCreatePrivateChat,
    IChat,
    IDataCreateChat,
    IPrivateChat
} from '../helpers/Message/interface';
import Validator from "../helpers/validator";
import {ChatNotFound, PrivateChatNotFound, UserNotFound, YouNotMemberThisChat} from "../Errors";
import {ActiveChat} from "../helpers/Message/enums";

class Message {

    _messageStorage;
    _userStorage;

    constructor(messageStorage, userStorage){
        this._messageStorage = messageStorage;
        this._userStorage = userStorage;
    }

    async createChat(data: IDataCreateChat, user: IUser): Promise<boolean>{
        const validator: Validator = new Validator();

        validator.setRules('title', Validator.TYPES.string().required());
        validator.setRules('image', Validator.TYPES.string());

        validator.validate(data);

        const [createChat]: [number] = await this._messageStorage.createChatDB({data,user});

        await this.addMemberInChat({user_id:user.id, chat_id: createChat }, user);

        return true;
    }

    async addMemberInChat(data: AddMemberWithChat, _user: IUser): Promise<boolean>{
        const validator: Validator = new Validator();

        validator.setRules('user_id', Validator.TYPES.number().required());
        validator.setRules('chat_id', Validator.TYPES.number().required());

        validator.validate(data)

        const [chat]: [IChat] = await this._messageStorage.searchChat({id: data.chat_id});

        if(!chat){
            throw new ChatNotFound();
        }

        const [user]: [IUser] = await this._userStorage.findUser({id: data.user_id});

        if (!user) {
            throw new UserNotFound();
        }

        await this._messageStorage.addMemberInChat(data);

        return true
    }

    async sendMessage (_data: CreateMessage, _user: IUser ):Promise<boolean>{
        return true
    }

    async createPrivateChat(data:DBCreatePrivateChat, user: IUser ): Promise<IPrivateChat>{
        const validator: Validator = new Validator();

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

    async sendPrivateMessage (data: CreateMessage, user: IUser): Promise<number> {

        const validator: Validator = new Validator();

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