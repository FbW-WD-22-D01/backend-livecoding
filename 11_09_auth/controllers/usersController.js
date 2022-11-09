import User from '../models/User.js'
import bcrypt from 'bcrypt'

/** @type {import("express").RequestHandler} */
export async function createUser (req, res) {
  const user = new User(req.body)
  user.password = await bcrypt.hash(user.password, 10)
  await user.save()
  res.status(201).send(user)
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

  if(!user) {
    return next({status: 401, message: 'You shall not pass!'})
  }

  const passwordsAreEqual = await bcrypt.compare(req.body.password, user.password)

  if(!passwordsAreEqual) {
    return next({status: 401, message: 'You shall not pass!'})
  }

  // erstelle zufälligen token. z.b: "ug1j1"
  user.token = Math.random().toString(36).slice(2, 7)
  await user.save()

  res.status(200).send(user.token)
}