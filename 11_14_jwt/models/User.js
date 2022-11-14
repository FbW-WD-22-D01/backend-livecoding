import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  token: String
})



Schema.methods.toJSON = function () {
  const user = this
  const result = {
    name: user.name,
    _id: user.id,
    email: user.email,
  }
  return result
}


const User = mongoose.model('User', Schema, 'users')

export default User
