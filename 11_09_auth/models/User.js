import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true }
})

const User = mongoose.model('User', Schema, 'users')

export default User