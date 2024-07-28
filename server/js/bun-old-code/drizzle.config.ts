import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: './schemas/schema.ts',
    out: './drizzle',
    driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
        // @ts-ignore
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        // @ts-ignore
        database: process.env.DB_NAME,
    },
} satisfies Config;