import express from 'express'
import * as controller from '../controllers/usersController.js'
import auth from '../middlewares/auth.js'
import 'express-async-errors'
import * as validations from '../lib/userValidation.js'

const app = express.Router()

app.get('/', auth, controller.getUser)
app.post('/register', ...validations.register,  controller.createUser)
app.post('/login', ...validations.login, controller.login)
app.get('/loggedIn', auth, controller.isLoggedIn)
app.get('/logout', auth, controller.logout)
app.get('/email-val/:token', controller.verification )


export default app