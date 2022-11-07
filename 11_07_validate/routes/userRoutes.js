import express from "express";
import { addUser, loginUser, createNewMsg } from "../controler/userController.js";
import 'express-async-errors'
import { validateCreateUser, validateLogin } from "../middleware/validate.js";

const app = express.Router()


// app.post('/login', body('password').isString(), body('name').isString(), loginUser)
 app.post('/login', validateLogin() , loginUser)

app.post('/add', validateCreateUser(), addUser)
app.post('/:id/newmsg', createNewMsg)

export default app