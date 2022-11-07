import { body, validationResult } from "express-validator";
import httpErrors from "http-errors"

export function validateLogin(req, res, next){
    return [
        body('password').isString(),
        body('name').isString(),
        
        (req, res, next) => {
            const errors = validationResult(req)
            if (errors.isEmpty()) return next()
            throw httpErrors.Unauthorized()
        }
    ]    
}


export function validateCreateUser(){
    return[
        body('email').isEmail().withMessage('Ist keine gültige Email'),
        body('password').isLength({min: 5}).withMessage('Passwort zu kurz'),
        body('email').normalizeEmail(),
        body('name').trim(),

        (req, res, next) => {
            const errors = validationResult(req)
            if (errors.isEmpty()) return next()
            // return res.status(401).send(errors)
            throw httpErrors.BadRequest(errors)
        }
    ]
}