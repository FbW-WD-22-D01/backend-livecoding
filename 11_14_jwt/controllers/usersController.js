import createHttpError from 'http-errors'
import User from '../models/User.js'

/** @type {import("express").RequestHandler} */
export async function createUser (req, res) {
  const user = new User(req.body)
  await user.save()

  res.status(201).send(user)
}



/** @type {import("express").RequestHandler} */
export async function getUser(req, res, next) {
  
  throw createHttpError.NotImplemented()
}



/** @type {import("express").RequestHandler} */
export async function login (req, res, next) {

  throw createHttpError.NotImplemented()
}