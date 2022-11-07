import mongoose from "mongoose";
import express from 'express'
import userRouter from './routes/userRoutes.js'
import 'express-async-errors'


mongoose.connect('mongodb://localhost:27017/live_validate')
    .then(() => console.log('db up'))
    .catch((err) => console.log(err))


const app = express()
app.use(express.json())


app.get('/', (req,res) => res.send('Geht'))
app.use('/user', userRouter)


app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    message: error.message
  })
})

app.listen(5003, () => console.log('Server rennt auf 5003'))