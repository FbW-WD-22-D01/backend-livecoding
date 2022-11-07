import express from "express";
import { addUser, loginUser } from "../controler/userController.js";
import 'express-async-errors'

const app = express.Router()


app.post('/login', loginUser)
app.post('/add',  addUser)


export default app