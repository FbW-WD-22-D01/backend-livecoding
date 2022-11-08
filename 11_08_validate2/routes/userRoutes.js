import express from "express";
import { addUser, loginUser, createNewMsg } from "../controler/userController.js";
import 'express-async-errors'
import { validateInputs } from "../middleware/validate.js";
import { createMessage, createValidation, loginValidation } from "../lib/validate/userRules.js";

const app = express.Router()


// app.post('/login', body('password').isString(), body('name').isString(), loginUser)
 app.post('/login',  validateInputs(loginValidation), loginUser)

app.post('/add', validateInputs(createValidation), addUser)
app.post('/:id/newmsg',validateInputs(createMessage), createNewMsg)

export default app