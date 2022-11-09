import User from '../models/User.js'

/** @type {import("express").RequestHandler} */
export async function createUser (req, res) {
  const user = await User.create(req.body)
  res.status(200).send(user)
}