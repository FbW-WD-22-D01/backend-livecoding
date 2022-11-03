import httpErrors from 'http-errors'
import Order from '../models/Order.js'

/** @type {import("express").RequestHandler} */
export async function createOrder(req, res) {
  const order = await Order.create(req.body)
  res.status(201).send(order)
}

/** @type {import("express").RequestHandler} */
export async function getOrderList(req, res) {
  const orders = await Order.find().populate('records').populate('user')
  res.status(200).send(orders)
}