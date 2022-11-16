import type {
    AddMemberWithChat,
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
    // create chats
    async createChatDB(chat:DBCreateChat): Promise<IChat>{
        const createChat = {
            author_id: chat.user.id, // автор этого часа
            title: chat.data.title,
            image: chat.data.image || 'NonePhoto.png',
            status: ActiveChat.CREATED,
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

    // members in chat
    async addMemberInChat(data: AddMemberWithChat){
        return db(DB_MESSAGE.CHAT_MEMBERS).insert(data);
    }

    async searchMembersInChat(where: SearchChat , fields: [string] = ['*'], orderBy: [string] = ['id']){
        return db(DB_MESSAGE.CHAT_MEMBERS).where(where).select(fields).orderBy(orderBy);
    }

    // search chats
    async searchChat(where: SearchChat , fields: [string] = ['*'], orderBy: [string] = ['id']){
        return db(DB_MESSAGE.CHATS).where(where).select(fields).orderBy(orderBy);
    }

    async searchPrivateChat(where: SearchChat , fields: [string] = ['*'], orderBy: [string] = ['id']){
        return db(DB_MESSAGE.PRIVATE_CHAT).where(where).select(fields).orderBy(orderBy);
    }

    // add message in chat

    async createMessage(data: CreateMessage): Promise<IPrivateChat> {
        const createMessage = {
            author_id: data.author_id,
            chat_id: data.chat_id,
            message: data.message,
            active : ActiveMessage.CREATED,
            created_at: Math.round(Date.now() / 1000),
            updated_at: Math.round(Date.now() / 1000)
        }
        return db(DB_MESSAGE.MESSAGES).insert(createMessage).returning('id');
    }

    async createPrivateMessage(data: CreateMessage): Promise<IPrivateChat> {
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