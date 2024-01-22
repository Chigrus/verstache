import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const { Pool } = pg;

const pool = new Pool({
    user: process.env['DB_USER'],
    host: process.env['DB_HOST'],
    database: process.env['DB_NAME'],
    password: process.env['DB_PASS'],
    port: process.env['DB_PORT'],
});

export async function connectToDB(){
    try {
        const dbconn = await pool.connect();
        return dbconn;
    } 
    catch (err) {
        console.log(err);
    }
}