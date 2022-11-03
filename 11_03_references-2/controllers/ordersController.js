import httpErrors from 'http-errors'
import Order from '../models/Order.js'

/** @type {import("express").RequestHandler} */
export async function createOrder(req, res) {
  const order = await Order.create(req.body)
  res.status(201).send(order)
}

/** @type {import("express").RequestHandler} */
export async function getOrderList(req, res) {
  // const orders = await Order.find()
  //   .populate('records', '-_id -__v')
  //   .populate('user', '-_id -__v')
  //   .select('-_id -__v')
  const userId = req.query.userId // '1'

  let query = Order.find()

  if(userId) query = query.where('user').equals(userId)
  query = query.populate('records', '-_id -__v')
  query = query.populate('user', '-_id -__v')
  query = query.select('-__v')

  const orders = await query

  res.status(200).send(orders)
}
