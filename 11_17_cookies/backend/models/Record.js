import mongoose from "mongoose";


const Schema = mongoose.Schema({
    title: {type: String, required: true},
    band: String,
    price: Number
})

const Record = mongoose.model('Record', Schema, 'records')

export default Record