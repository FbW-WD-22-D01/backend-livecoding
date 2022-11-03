import express from 'express'
import recordsRouter from './routes/recordsRouter.js'
import ordersRouter from './routes/ordersRouter.js'
import usersRouter from './routes/usersRouter.js'
import 'express-async-errors'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.DB_CONN)
  .then(() => console.log('Datenbank läuft'))
  .catch(() => console.log('Datenbank Verbindung fehlgeschlagen'))

const app = express()


// regelt die kommunikation zwischen BROWSER und Server. nur wenn die aktuelle
// url des Browsers gewhitelistet ist, darf der browser die antwort lesen
app.use(cors({
  origin: '*'
}))

app.use(express.json())

app.use('/records', recordsRouter)
app.use('/orders', ordersRouter)
app.use('/users', usersRouter)


app.use((req, res, next) => {
  next({
    status: 404,
    message: 'not-found'
  })
})

// app.get('/records/:id', (req, res, next) => {
//   throw new Error('my error')
// })

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    message: error.message
  })
})


app.listen(process.env.PORT, () => console.log('app listening on localhost:3001'))