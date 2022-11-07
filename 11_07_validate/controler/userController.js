import User from "../models/users.js";
import httpErrors from 'http-errors'

/** @type {import("express").RequestHandler} */
export async function addUser(req, res){
   
    const newUser = await User.create(req.body)

    res.send({
        message: 'User created',
        user: newUser
        })
}

/** @type {import("express").RequestHandler} */


/** @type {import("express").RequestHandler} */
export async function loginUser(req, res){
    const {name, password} = req.body 
    try{
        const user = await User.find({name: name, password: password})
        if (!user) throw httpErrors.NotFound('User not found')
        res.send({
            message: 'Login successfull',
            user: user
        })
    }catch(err) {
        res.send({error: err.message})
    }

}

