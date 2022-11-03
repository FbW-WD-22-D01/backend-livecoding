import express from 'express'
import * as controller from '../controllers/ordersController.js'
import 'express-async-errors'

const app = express.Router()

app.post('/', controller.createOrder)
app.get('/', controller.getOrderList)
app.patch('/:id', controller.patchOrder)

export default app