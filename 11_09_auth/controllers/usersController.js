import User from '../models/User.js'

/** @type {import("express").RequestHandler} */
export async function createUser (req, res) {
  const user = await User.create(req.body)
  res.status(200).send(user)
}

/** @type {import("express").RequestHandler} */
export async function getUser(req, res, next) {
  const token = req.headers['x-authorization']

  const user = await User.findOne().where('token').equals(token)

  if(!user) {
    return next({
      status: 401,
      message: 'You shall not pass!'
    })
  }

  res.status(200).send(user)
}

/** @type {import("express").RequestHandler} */
export async function login (req, res, next) {
  // req.body.email
  // req.body.password

  const user = await User.findOne().where('email').equals(req.body.email)

  if(!user || user.password !== req.body.password) {
    return next({status: 401, message: 'You shall not pass!'})
  }

  // erstelle zufälligen token. z.b: "ug1j1"
  user.token = Math.random().toString(36).slice(2, 7)
  await user.save()

  res.status(200).send(user.token)
}