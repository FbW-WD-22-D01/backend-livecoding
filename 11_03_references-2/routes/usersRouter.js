import express from 'express'
import * as controller from '../controllers/usersController.js'
import 'express-async-errors'

const app = express.Router()

app.post('/', controller.createUser)

export default app