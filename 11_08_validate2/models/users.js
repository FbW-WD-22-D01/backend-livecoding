import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String,
    messages: [{type: mongoose.Schema.Types.ObjectId, ref: 'Message'}],
    creditCard: String,
    registeredAt: Date
})

const User = mongoose.model('User', UserSchema)

export default User