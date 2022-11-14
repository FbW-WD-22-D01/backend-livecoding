import express from 'express'
import * as controller from '../controllers/usersController.js'
import auth from '../lib/middlewares/auth.js'
import 'express-async-errors'
import * as validations from '../lib/validations/userValidations.js'

const app = express.Router()

app.get('/',  controller.getUser)
app.post('/register', ...validations.register, controller.createUser)
app.post('/login', ...validations.login, controller.login)


export default app