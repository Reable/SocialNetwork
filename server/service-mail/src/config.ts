import dotenv from "dotenv";
dotenv.config()

const config = {
    connectMailService: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE, // true for 465
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        },
    }
}

export default config;