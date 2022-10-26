import './config/config.js'
import express from 'express'
import { showAllUsers, showUserById } from './controller/customer.js'
import mongoose from 'mongoose'

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

app.get('/users', showAllUsers)
app.get('/user/:userid', showUserById)



// an Ports hängen
app.listen(PORT, () => console.log('Server läuft: ', PORT))