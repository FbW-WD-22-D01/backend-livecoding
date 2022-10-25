import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import { addUser, showUsers } from './controller/userController.js'
dotenv.config()

const { DB_CONN, PORT } = process.env

// Datenbank initialisieren
mongoose
    .connect(DB_CONN)
    .then(() => console.log('Database up'))
    .catch((error) => console.log(error))



const app = express()

app.use(express.json())

app.get('/', showUsers)
app.post('/add', addUser)



app.listen(PORT, () => console.log('Server running', PORT))