import express from 'express'
import * as controller from '../controllers/usersController.js'
import auth from '../lib/middlewares/auth.js'
import 'express-async-errors'

const app = express.Router()

app.get('/', auth, controller.getUser)
app.post('/register', controller.createUser)
app.post('/login', controller.login)
app.patch('/', auth, controller.updateUser)


export default app