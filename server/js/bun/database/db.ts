import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from '../schemas/schema.ts';

export const connection = await mysql.createConnection({
    host: process.env.DB_HOST         ?? "127.0.0.1",
    user: process.env.DB_USER         ?? "root",
    password: process.env.DB_PASSWORD ?? "root",
    database: process.env.DB_NAME     ?? "bun",
    multipleStatements: true,
});
export const db = drizzle(connection, {
    schema,
    mode: 'planetscale'
});