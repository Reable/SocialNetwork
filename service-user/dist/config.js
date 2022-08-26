"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
exports.database = {
    client: process.env.DB_TYPE,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
};
