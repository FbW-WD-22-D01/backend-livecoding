import express from 'express'
import mongoose from 'mongoose'
import usersRouter from './routers/usersRouter.js'

mongoose.connect('mongodb://localhost:27017/mongoose_jwt')
    .then(() => console.log('db up'))
    .catch((err) => console.log(err))

  
    
const app = express()

app.use(express.json())

app.use('/user', usersRouter)

app.use((req, res, next) => {
  next({
    status: 404,
    message: 'not-found'
  })
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message
  })
})

app.listen(5001, () => console.log('listening on port 5001'))