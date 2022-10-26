import Customer from "../models/Customer.js"

export async function showAllUsers(req, res, next){
    try {
        const users = await Customer.find()
        res.send(users)
    }catch(err){
        console.log(err)
        res.send('Fehler')
    }
}

export async function showUserById(req, res, next){
    console.log(req.params)
    try {
        const user = await Customer.findById(req.params.userid)
        res.send(user)
    }catch (error){
        console.log(err)
        res.send('Fehler')
    }
}

// User nach firstname suchen:
// await Customer.find({firstname: req.params.firstname})