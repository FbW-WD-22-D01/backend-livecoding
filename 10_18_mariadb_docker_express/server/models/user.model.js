import { db } from "../config/db.js";
const User = {};

User.read = async (username) =>  {
    try {
        conn = await pool.getConnection();
        sql = "SELECT id,username,email,role FROM USERS WHERE username = ?";
        const rows = await conn.query(sql, username);
        conn.end();
        if (rows.length == 1) {
        return rows[0];
        } else {
        return false;
        }
    } catch (err) {
        throw err;
    }
}

export {User};