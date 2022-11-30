import {body} from 'express-validator'
import validate from '../middlewares/validate.js'
import User from '../models/User.js'

export const register = [
  body('name').isString().optional().withMessage('Bitte gib deinen Namen ein'),
  body('password').isStrongPassword().withMessage('Wähle ein starkes Passwort'),
  body('email').isEmail().withMessage('Die Email ist nicht korrekt').custom(async (value) => {
    const user = await User.findByEmail(value)
    if(user) throw new Error('Die Email existiert bereits')
    return true
  }),
  validate,
]

export const login = [
  body('password').isString(),
  body('email').isEmail().withMessage('email not valid'),
  validate,
]

