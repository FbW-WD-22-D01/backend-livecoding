import express from 'express'

/**
 * dadurch brauchen wir kein try-catch mehr bei async middlewares
 */
import 'express-async-errors'

const app = express.Router()

app.route('/')
  .get((req, res, next) => {
    res.status(200).send('ok')
  })
  .post((req, res, next) => {
    console.log(req.body)
    res.status(200).send('post')
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

app.get('/:id', async (req, res, next) => {
  const n = 0
  n.toUpperCase()
  res.status(200).send('ok')
})

export default app