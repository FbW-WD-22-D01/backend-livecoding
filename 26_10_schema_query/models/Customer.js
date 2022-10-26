import {Schema, model} from 'mongoose'

const AddrSchema = new Schema({
    city:   String,
    street: String,
    zip:    String
},{
    _id: false
})


const CustomerSchema = new Schema({
    firstname: String,
    lastname:  {type: String, required: true},
    email:     {type: String, unique: true, required: true },      
    isAdmin:   {type: Boolean, default: false},
    address:   {type: AddrSchema, required: true},
    otherAddr: [ AddrSchema ]
})




const Customer = model('Customer', CustomerSchema) 

export default Customer