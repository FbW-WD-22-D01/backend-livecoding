import Record from './models/Record.js'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

mongoose.connect(process.env.DB_CONN)

const dataset = [
  { title: "Title 1", price: 10, genre: 'Rock' },
  { title: "Title 2", price: 10, genre: 'Classic' },
  { title: "Title 3", price: 5, genre: 'Rock' },
  { title: "Title 4", price: 6, genre: 'Classic' },
  { title: "Title 5", price: 7, genre: 'Rock' },
  { title: "Title 6", price: 8, genre: 'Classic' },
  { title: "Title 7", price: 9, genre: 'Rock' },
  { title: "Title 8", price: 10, genre: 'Classic' },
  { title: "Title 9", price: 15, genre: 'Rock' },
  { title: "Title 10", price: 20, genre: 'Classic' },
  { title: "Title 11", price: 40, genre: 'Rock' },
  { title: "Title 12", price: 100, genre: 'Classic' },
]

Record.collection.drop().then(() => {
  return Promise.all(dataset.map(row => Record.create(row)))
    .then(() => process.exit())
})

