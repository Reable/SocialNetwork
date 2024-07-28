import {users} from "../../models/users.ts";

export interface IUser{
    id?:number | string
    login?:string
    email?:string
    name?:string
    description?:string
    status?:string
    password?:string
    date_birth?:string
    image?:string
}