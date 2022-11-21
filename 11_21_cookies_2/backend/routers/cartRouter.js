import express from 'express'
import { addRecord } from '../controllers/cartController.js'
import auth from '../middlewares/auth.js'

const app = express.Router()


app.post('/add', auth, addRecord)

export default app