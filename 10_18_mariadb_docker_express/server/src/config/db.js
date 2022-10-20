import mariadb from 'mariadb';
import dotenv from 'dotenv';
dotenv.config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const db = {};

db.getConnection = async () =>  {
    let conn;
    try {
        conn = await pool.getConnection();
        return conn;
    } catch (error) {
        throw error;
    }
}

export {db}