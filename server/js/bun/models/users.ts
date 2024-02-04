import { int, mysqlEnum, mysqlTable, uniqueIndex, varchar, serial } from 'drizzle-orm/mysql-core';
// declaring enum in database
export const users = mysqlTable('users', {
    id: serial("id").primaryKey(),
    login: varchar('login', { length: 100 }),
    email: varchar('email', { length: 256 }),
    name: varchar('name', { length: 256 }),
    date_birth: varchar('date_birth', { length: 256 }),
    description: varchar('description', { length: 256 }),
    status: varchar('status', { length: 256 }),
    image: varchar('image', { length: 256 }),
    password: varchar('password', { length: 256 }),
});