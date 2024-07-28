import { index, int, mysqlTable, bigint, varchar } from 'drizzle-orm/mysql-core';
import {sql} from "drizzle-orm/sql/sql";


export const usersMigrate = mysqlTable('users', {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    login: varchar('login', { length: 100 }).notNull().unique(),
    email: varchar('email', { length: 256 }).notNull().unique(),
    name: varchar('name', { length: 256 }).notNull(),
    date_birth: varchar('date_birth', { length: 256 }),
    description: varchar('description', { length: 256 }),
    status: varchar('status', { length: 256 }),
    image: varchar('image', { length: 999 }),
    password: varchar('password', { length: 256 }),
});