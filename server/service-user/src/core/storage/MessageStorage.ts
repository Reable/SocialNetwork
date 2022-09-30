import type {DBCreateChat} from "../helpers/Message/interface";
import db from '../services/database'
import {DB_MESSAGE} from "../helpers/Enums";

class MessageStorage{

    async create(data:DBCreateChat){
        const createChat = {
            author_id: data.user.id,
            title: data.chat.title,
            image: data.chat.image || '',
            close: data.chat.close
        }
        return db(DB_MESSAGE.CHAT).insert(createChat)
    }

}

export default new MessageStorage()