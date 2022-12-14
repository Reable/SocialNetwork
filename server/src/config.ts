import dotenv from "dotenv";
import type { IConnectDatabase } from "./core/helpers/User/interface";

dotenv.config()

export const database: IConnectDatabase = {
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
};

export const JWT_KEY: string | undefined = process.env.JWT_SECRET_KEY;
export const JWT_LIFE: string = "7d";

export const MailData = {
    user: process.env.MailUser,
    password: process.env.MailPassword
}
