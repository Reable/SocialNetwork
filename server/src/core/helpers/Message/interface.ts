import type {IUser} from "../User/interface";

export interface IChat {
    id: number
    author_id: number
    title: string
    image?: string
    created_at: number
    updated_at: number
}

export interface IDataCreateChat {
    title: string
    image?: string
    close: number
}

export interface IDeleteChat {
    chat_id: number
}

export interface IUpdateChat {
    chat_id: number
    title?: string
    image?: string
}

export interface DBCreateChat {
    data: IDataCreateChat,
    user: IUser
}


// Private chat
export interface ICreatePrivateChat {
    user_id: number
}

export interface DBCreatePrivateChat extends ICreatePrivateChat{
    author_id: number
}

export interface IPrivateChat {
    id?: number
    author_id: number
    user_id: number
    on_delete: number
    created_at?: number
    updated_at?: number
}

export interface IPrivateMessage {
    private_chat_id: number
    message: string
}