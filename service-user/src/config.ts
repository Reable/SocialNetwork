import type { IConnectDatabase } from "./core/helpers/interface";

export const database: IConnectDatabase = {
    client: process.env.DB_TYPE,
    connection: {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
    }
}
