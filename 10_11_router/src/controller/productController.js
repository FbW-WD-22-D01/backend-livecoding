import { db } from '../config/lowdb.js';
import {Product} from '../model/product.js'

async function getAllProducts(req, res){
    await db.read();
    const products = await Product.get();
    res.status(200).json(products)

}

export {getAllProducts}