import createHttpError from 'http-errors'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'


/** @type {import("express").RequestHandler} */
export async function createUser (req, res) {
  // zuerst pw hashen dann speichern
  const user = new User(req.body)
  await user.save()

  res.status(201).send(user)
}



/** @type {import("express").RequestHandler} */
export async function getUser(req, res, next) {

  res.status(200).send(req.user)
}



/** @type {import("express").RequestHandler} */
export async function login (req, res, next) {
  const {email, password} = req.body

  const user = await User.findOne().where('email').equals(email)
  if(!user) return next({status: 401, message: 'Kein Zutritt'})
  
  // user.password in Hash in Datenbank checken mit password in Klartext
  const isPasswordCorrect = await user.checkPassword(password)
  if (!isPasswordCorrect) return next({status: 401, message: 'Kein Zutritt'})
  
  user.generateToken()
  await user.save()

  res.send(user.token)
 


}