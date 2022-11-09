import express from 'express'
import * as controller from '../controllers/usersController.js'
import 'express-async-errors'

const app = express.Router()

app.get('/', controller.getUser)
app.post('/register', controller.createUser)
app.post('/login', controller.login)


export default app