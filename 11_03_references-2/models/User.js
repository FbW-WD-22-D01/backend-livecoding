import mongoose from "mongoose"

const Schema = mongoose.Schema({
  name: {type:String, required:true},
})

const User = mongoose.model('User', Schema, 'users')

export default User

// POST /users