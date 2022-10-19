import type {
    CreateMessage,
    DBCreateChat,
    DBCreatePrivateChat,
    IChat,
    IPrivateChat, SearchChat,
} from "../helpers/Message/interface";
import db from '../services/database'
import {DB_MESSAGE} from "../helpers/Enums";
import {ActiveMessage, ActiveChat} from "../helpers/Message/enums";

class MessageStorage{

    async createChatDB(chat:DBCreateChat): Promise<IChat>{
        const createChat = {
            author_id: chat.user.id, // автор этого часа
            title: chat.data.title,
            image: chat.data.image || 'NonePhoto.png',
            close: chat.data.close,
            created_at: Math.round(Date.now() / 1000),
            updated_at: Math.round(Date.now() / 1000)
        }
        return db(DB_MESSAGE.CHATS).insert(createChat);
    }

    async createPrivateChatDB(data: DBCreatePrivateChat): Promise<IPrivateChat> {
        const createPrivateChat: IPrivateChat = {
            author_id: data.author_id,
            user_id: data.user_id,
            active: ActiveChat.CREATED,
            created_at: Math.round(Date.now() / 1000),
            updated_at: Math.round(Date.now() / 1000)
        }
        return db(DB_MESSAGE.PRIVATE_CHAT).insert(createPrivateChat);
    }

    async searchPrivateChat(where: SearchChat , fields: [string] = ['*'], orderBy: [string] = ['id']){
        return db(DB_MESSAGE.PRIVATE_CHAT).where(where).select(fields).orderBy(orderBy);
    }

    async createMessage(data: CreateMessage): Promise<IPrivateChat> {
        const createMessage = {
            author_id: data.author_id,
            chat_id: data.chat_id,
            message: data.message,
            active : ActiveMessage.CREATED,
            created_at: Math.round(Date.now() / 1000),
            updated_at: Math.round(Date.now() / 1000)
        }
        return db(DB_MESSAGE.PRIVATE_MESSAGES).insert(createMessage).returning('id');
    }

}

export default new MessageStorage()