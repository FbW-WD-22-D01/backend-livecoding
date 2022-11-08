import mongoose from 'mongoose'

const MessageSchema = mongoose.Schema({
    content: String,
    date: Date,
    channel: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Message = mongoose.model('Message', MessageSchema)

export default Message