import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String,
    messages: [String],
    creditCard: String,
    registeredAt: Date
})

const User = mongoose.model('User', UserSchema)

export default User