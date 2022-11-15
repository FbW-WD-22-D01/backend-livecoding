import express from 'express'
import { getRecords } from '../controllers/recordController.js'


const app = express.Router()


app.get('/', getRecords)

export default app