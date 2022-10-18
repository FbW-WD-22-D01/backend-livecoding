import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server listening at port: " + process.env.SERVER_PORT)
});