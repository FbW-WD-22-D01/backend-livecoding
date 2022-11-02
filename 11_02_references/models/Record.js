import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
})

const Model = mongoose.model('Record', Schema, 'records')

export default Model