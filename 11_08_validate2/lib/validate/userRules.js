import {body, param} from 'express-validator'
import User from '../../models/users.js'
import httpErrors from "http-errors"

export const loginValidation = [
    body('password').isString(),
    body('name').isString(),
]


export const createValidation = [
    body('email').isEmail().withMessage('Ist keine gültige Email'),
    // body('password').isLength({min: 5}).withMessage('Passwort zu kurz'),
    body('password').isStrongPassword().withMessage('Unser PW ist zu schwach'),
    body('email').normalizeEmail(),
    body('name').trim(),
]

export const createMessage = [
    body('content')
        .isString()
        .withMessage('Dein Inhalt muss String sein'),
    param('id')
        .custom( async (value) => {
            const user = await User.findById(value)
            if (user) return true
            throw httpErrors.BadRequest('User existiert nicht')
        })
    

]