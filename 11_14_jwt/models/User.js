import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret = 'unsergeheimesPasswort'

const Schema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  token: String
})

Schema.statics.findByToken = function(token){
  const verified = jwt.verify(token, secret )
  return User.findById(verified._id).where('token').equals(token)

}

Schema.methods.toJSON = function () {
  const user = this
  const result = {
    name: user.name,
    _id: user.id,
    email: user.email,
  }
  return result
}

Schema.methods.checkPassword = async function(password){
  const user = this
  return await bcrypt.compare(password, user.password)
}

Schema.methods.generateToken = async function(){
  
  const user = this
  // user.token = Math.random().toString()
  user.token = jwt.sign({_id: user._id, name: user.name, email: user.email}, secret, {expiresIn: '1d'} )
}






Schema.pre('save', async function(next){
  const user = this
  if (user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 10) // Passwort hashen mit 10 salt Runden
  }
  next()

}  )

const User = mongoose.model('User', Schema, 'users')

export default User
