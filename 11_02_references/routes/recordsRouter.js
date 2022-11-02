import express from 'express'

const app = express.Router()

app.route('/')
  .get((req, res, next) => {
    res.status(200).send('ok')
  })
  .delete((req, res, next) => {
    res.status(200).send('delete')
  })

// app.get('/', (req, res, next) => {
//   res.status(200).send('ok')
// })

// app.delete('/', (req, res, next) => {
//   res.status(200).send('delete')
// })

app.get('/:id', (req, res, next) => {
  res.status(200).send('ok')
})

export default app