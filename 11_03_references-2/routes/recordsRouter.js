import express from 'express'
import * as controller from '../controllers/recordsController.js'

/**
 * dadurch brauchen wir kein try-catch mehr bei async middlewares
 */
import 'express-async-errors'

const app = express.Router()

app.route('/')
  .get(controller.getAllRecords)
  .post(controller.createRecord)
  

// app.get('/by-title/:title', controller.getRecordById)

app.get('/:id', controller.getRecordById)


export default app