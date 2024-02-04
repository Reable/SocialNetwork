import 'dotenv/config';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db, connection } from './db.ts';

try{
    await migrate(db, { migrationsFolder: './drizzle' });
    await connection.end();
} catch(e){
    console.log(e)
    await connection.end();
}
