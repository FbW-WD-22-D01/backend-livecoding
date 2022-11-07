import express from "express";
import { addUser, loginUser, createNewMsg } from "../controler/userController.js";
import 'express-async-errors'

const app = express.Router()


app.post('/login', loginUser)
app.post('/add',  addUser)
app.post('/:id/newmsg', createNewMsg)

export default app