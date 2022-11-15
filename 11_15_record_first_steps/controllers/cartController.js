import mongoose from 'mongoose'
import Cart from '../models/Cart.js'

export async function addRecord(req, res, next) {
    const user = req.user
    const {recordId, amount} = req.body

    // eventuell userid in ObjectId umwandeln
    // const userId = mongoose.Types.ObjectId(user._id)

    // 1. Cart suchen
    const cart = await Cart.findOne().where('user').equals(user._id)
    
    // Wenn user die cartId verwaltet im Model
    // const cart = await Cart.findById(user.cart)

    // 2. Produkte in Carts tun
    cart.products.push({recordId, amount})

    cart.save()
    res.status(200).send(cart)
}