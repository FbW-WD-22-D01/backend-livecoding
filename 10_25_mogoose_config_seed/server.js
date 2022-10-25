// Config Datei um die richtige env zu laden 
import './config/config.js'

// anderen Abhängigkeiten
import express from 'express'
import mongoose from 'mongoose'
import { showAllUsers } from './controller/userController.js'


// Express initialisieren
const app = express()


// Datenbank initialisieren
mongoose
    .connect(process.env.DB_CONN)
    .then(() => console.log('Datenbank ist da'))
    .catch((err) => console.log('Irgendwas kaputt: ', err))



// Middleware
app.use(express.json())


// Route mit Controller
app.get('/', showAllUsers)


// Express Server an Port hängen
app.listen(process.env.PORT, () => console.log('Server is running...', process.env.PORT))