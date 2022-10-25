import {model, Schema} from 'mongoose'


const UserSchema = new Schema(
    
    {
        firstname:      {type: String},
        lastname:       {type: String},
        city:           {type: String},
        birthday:       {type: Date},
        registeredAt:   {type: Date},
        email:          {type: String},
        isAdmin:        {type: Boolean},
        avatar:         {type: String}
    }
) 

const User = model('User', UserSchema); //users Collection in der Db

export default User