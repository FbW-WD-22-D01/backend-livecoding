import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

const db = {};

db.getConnection = () => {
    return new Promise((res, rej) => {
        pool.getConnection()
            .then((conn) => {
                res(conn);
            })
            .catch((error) => {
                rej(error);
            });
    });
}

export {db}