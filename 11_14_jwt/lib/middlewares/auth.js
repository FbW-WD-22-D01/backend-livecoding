import httpErrors from 'http-errors'
import User from '../../models/User.js'

/** @type {import("express").RequestHandler} */
export default async function auth (req, res, next) {
  const token = req.headers["x-authorization"]
  if (!token) throw createHttpError.NotFound('Kein Zutritt')
  
  const user = await User.findByToken(token)
  
  if (!user) throw createHttpError.NotFound('Kein Zutritt')
  req.user = user
  next()
}