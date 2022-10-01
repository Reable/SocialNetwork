import type {IUser} from "../User/interface";

export interface IChat {
    id: number
    author_id: number
    title: string
    image?: string
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