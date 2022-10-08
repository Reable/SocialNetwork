import type {DBCreateChat, IChat} from "../helpers/Message/interface";
import db from '../services/database'
import {DB_MESSAGE} from "../helpers/Enums";

class MessageStorage{

    async createChat(chat:DBCreateChat): Promise<IChat>{
        console.log(chat)
        const createChat = {
            author_id: chat.user.id,
            title: chat.data.title,
            image: chat.data.image || 'NonePhoto.png',
            close: chat.data.close,
            created_at: Math.round(Date.now() / 1000),
            updated_at: Math.round(Date.now() / 1000)
        }
        return db(DB_MESSAGE.CHATS).insert(createChat);
    }

}

export default new MessageStorage()