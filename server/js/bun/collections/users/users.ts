import {db} from "../../database/db.ts";
import {IUser} from "./types.ts";
import {users} from "../../models/users.ts";
import {eq} from "drizzle-orm";

export async function getUserId(id: number){
    let user = await db.select().from(users).where(eq(users.id, id));
    return user[0];
}

export async function createUser(user: IUser){
    // @ts-ignore
    return db.insert(users).values(user)
}

export async function findUser(data: any){
    let user = await db.select().from(users).where(data);
    return user[0];
}