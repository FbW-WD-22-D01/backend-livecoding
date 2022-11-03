import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  comment: String,
  user: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
  records: [{type: mongoose.Schema.Types.ObjectId, ref: 'Record'}]
})

const Order = mongoose.model('Order', Schema, 'orders')

export default Order

// GET /orders?userId=123214114