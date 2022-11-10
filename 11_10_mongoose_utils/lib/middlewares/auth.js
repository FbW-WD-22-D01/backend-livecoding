import httpErrors from 'http-errors'
import User from '../../models/User.js'

/** @type {import("express").RequestHandler} */
export default async function auth (req, res, next) {
  const token = req.headers['x-authorization']

  if(!token) throw httpErrors.Unauthorized('You shall not pass!')

  const user = await User.findByToken(token)

  if(!user) throw httpErrors.Unauthorized('You shall not pass!')

  req.user = user

  next()
}