import mongoose from "mongoose";


const Schema = mongoose.Schema({
    products: [
        {
            recordId: {type: mongoose.Schema.Types.ObjectId, ref: 'Record'},
            amount: Number
        }
    ],
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const Cart = mongoose.model('Cart', Schema)
export default Cart


// const warenkorb =
// {
//     products: [{name: '1234', amount: 5} , {name: '23746', amount: 5}],
//     user: '2374638634'
// }