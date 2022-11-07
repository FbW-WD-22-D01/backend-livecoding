import User from "../models/users.js";
import Message from '../models/messages.js'
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
export async function createNewMsg(req, res){
    // body = {content: 'Hallo', date: '2022-11-30', channel: 'allgemein'}
    const userId = req.params.id
    
    // neue Message erstellen und userId eintragen
    const data = {
        content: req.body.content,
        date: req.body.date,
        channel: req.body.channel,
        author: userId
    }
    const msg = await Message.create(data)
    
    // const msg = new Message(req.body)
    // msg.author = userId
    // await msg.save()

    // User suchen + messageId eintragen
    const user = await User.findById(userId)
    user.messages.push(msg._id)
    await user.save()
  
    await user.populate("messages", "content -_id")
    res.send({newMsg: msg, userUpdated: user})
}




/** @type {import("express").RequestHandler} */
export async function loginUser(req, res){
    // Wenn zuvor keine Validierung geschieht, können hier unerwünschte Operationen z.B. nosql Attacken (siehe unten) ausgeführt werden
    const {name, password} = req.body         
    
        const user = await User.findOne({name: name, password: password}).populate("messages", "content -_id")
      
        if (!user) throw httpErrors.Unauthorized()
      
        res.send({
            message: 'Login successfull',
            user: user
        })

}
// nosql Attack request: {"name": {"$gt": ""}, "password": {"$gt": ""}}

