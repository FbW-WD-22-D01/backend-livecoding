import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  token: String
})

Schema.statics.findByToken = function (token) {
  return User.findOne().where('token').equals(token)
}

Schema.statics.findByEmail = function (email) {
  return User.findOne().where('email').equals(email)
}

Schema.methods.generateToken = function () {
  const user = this
  // erstelle zufälligen token. z.b: "ug1j1"
  user.token = Math.random().toString(36)//.slice(2, 7)
}

Schema.methods.checkPassword = async function (password) {
  const user = this
  return await bcrypt.compare(password, user.password)
}

Schema.methods.hashPassword = async function (password) {
  const user = this
  user.password = await bcrypt.hash(password, 10)
}

const User = mongoose.model('User', Schema, 'users')

export default User
