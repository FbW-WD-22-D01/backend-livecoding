import {body} from 'express-validator'
import validate from '../middlewares/validation.js'

export const register = [
  body('name').isString().optional().withMessage('name must be of type string'),
  body('password').isStrongPassword(),
  body('email').isEmail().withMessage('email not valid'),
  validate,
]

export const login = [
  body('password').isString(),
  body('email').isEmail().withMessage('email not valid'),
  validate,
]

export const updateUser = [
  body('name').isString().optional().withMessage('name must be of type string'),
  body('password').isStrongPassword().optional(),
  body('email').isEmail().optional().withMessage('email not valid'),
  validate,
]