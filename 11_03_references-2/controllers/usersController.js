import httpErrors from 'http-errors'
import User from '../models/User.js'

/** @type {import("express").RequestHandler} */
export async function createUser(req, res) {
  // const user = new User(req.body)
  // await user.save()
  const user = await User.create(req.body)
  res.status(201).send(user)
}