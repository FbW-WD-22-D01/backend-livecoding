import express from 'express'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/auth')
    .then(() => console.log('db up'))
    .catch((err) => console.log(err))

  
    
const app = express()

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

app.listen(3001, () => console.log('listening on port 3001'))