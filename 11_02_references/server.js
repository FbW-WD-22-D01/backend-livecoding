import express from 'express'
import recordsRouter from './routes/recordsRouter.js'

const app = express()

// app.use((req, res, next) => {
//   res.status(200).send('ok')
//   // next()
// })

// app.use((req, res, next) => {
//   if(req._parsedUrl.pathname.includes('/user')) {
//     res.status(200).send('ok')
//   }
//   else {
//     next()
//   }
// })

app.use('/records', recordsRouter)

// app.get('/records/:id', (req, res, next) => {
//   throw new Error('my error')
// })

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    message: error.message
  })
})


app.listen(3001, () => console.log('app listening on localhost:3001'))