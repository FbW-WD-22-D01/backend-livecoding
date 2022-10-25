import {model, Schema} from 'mongoose'


const UserSchema = new Schema(
    {
        name: {type: String, required: true},
        city: {type: String},
        age:  {type: Number},
        isAdmin: {type: Boolean}
    }
)

const User=model('User', UserSchema)

export default User