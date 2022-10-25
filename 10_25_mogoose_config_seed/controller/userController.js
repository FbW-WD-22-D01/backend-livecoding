import User from "../models/User.js"

export async function showAllUsers(req, res, next){

    const allUsers = await User.find()
    // Code für die Datenbank

    res.send(allUsers)
}