import type {DBCreateChat, DBCreatePrivateChat, IChat, IPrivateChat} from "../helpers/Message/interface";
import db from '../services/database'
import {DB_MESSAGE} from "../helpers/Enums";

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
            on_delete: 0,
            created_at: Math.round(Date.now() / 1000),
            updated_at: Math.round(Date.now() / 1000)
        }
        return db(DB_MESSAGE.PRIVATE_CHAT).insert(createPrivateChat);
    }

}

export default new MessageStorage()