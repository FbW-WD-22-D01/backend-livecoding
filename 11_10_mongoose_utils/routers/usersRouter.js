import express from 'express'
import * as controller from '../controllers/usersController.js'
import auth from '../lib/middlewares/auth.js'
import 'express-async-errors'
import * as validations from '../lib/validations/userValidations.js'

const app = express.Router()

app.get('/', auth, controller.getUser)
app.post('/register', ...validations.register, controller.createUser)
app.post('/login', ...validations.login, controller.login)
app.patch('/', auth, ...validations.updateUser, controller.updateUser)


export default app