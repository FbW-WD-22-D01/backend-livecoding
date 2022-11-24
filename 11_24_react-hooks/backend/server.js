import * as dotenv from 'dotenv'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import mongoose from 'mongoose'
import recordRouter from './routers/recordsRouter.js'
import usersRouter from './routers/usersRouter.js'
import cartRouter from './routers/cartRouter.js'
import cookieParser from 'cookie-parser'
dotenv.config()

mongoose.connect(process.env.DB_CONN)
  .then(() => console.log('Datenbank läuft'))
  .catch(() => console.log('Datenbank Verbindung fehlgeschlagen'))

const app = express()


// regelt die kommunikation zwischen BROWSER und Server. nur wenn die aktuelle
// url des Browsers gewhitelistet ist, darf der browser die antwort lesen
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use('/records', recordRouter)
app.use('/user', usersRouter)
app.use('/cart', cartRouter)

app.use((req, res, next) => {
  next({
    status: 404,
    message: 'not-found'
  })
})

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    message: error.message
  })
})


app.listen(process.env.PORT, () => console.log('app listening on localhost:3001'))

