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

/** @type {import("express").RequestHandler} */
export async function patchOrder(req, res) {
  const id = req.params.id

  // const order = await Order.findByIdAndUpdate(id, req.body)
  // order.runValidators()


  let order = await Order.findById(id)

  if(!order) throw httpErrors.NotFound(`orderId ${id} not found`)

  for(const key in req.body) {
    order[key] = req.body[key]
  }
  await order.save()

  res.status(200).send(order)
}

/*
request: PATCH http://localhost:3001/orders/6363822c2b57970aafd9ef54
request-body:
{
  "user": "6363978d67673ae428e9374b",
  "comment": "Comment by Ali"
}

status: 200
response:
{
  _id: "id",
  comment: "Comment by Ali",
  user: "6363978d67673ae428e9374b",
  records: ["record-id1", "record-id2"],
  __v: 1
}
*/