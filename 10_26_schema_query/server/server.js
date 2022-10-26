import './config/config.js'
import express from 'express'
import { showAllUsers, showUserById } from './controller/customer.js'
import mongoose from 'mongoose'
import cors from 'cors'

// aUFGABE rOUTE DIE UnS ALLE uSER ZEIGT
// User suchen nach id


const {PORT, DB_CONN} = process.env

// Server initialisieren
const app = express()

// Datenbank initialisieren
mongoose
    .connect(DB_CONN)
    .then(() => console.log('Datenbank läuft'))
    .catch(err => console.log('Datenbank will nicht', err))

// Middleware einstellen
app.use(express.json())
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }))

app.get('/users', showAllUsers)
app.get('/user/:userid', showUserById)



// an Ports hängen
app.listen(PORT, () => console.log('Server läuft: ', PORT))