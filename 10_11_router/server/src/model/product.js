import { db } from "../config/lowdb.js";
import {v4 as uuidv4} from 'uuid';
const Product = {};


Product.get = async () => {
    await db.read();
    const products = db.data.products;
    return products;
}

Product.getById = async (id) => {
    await db.read();
    const product = db.data.products.find((product) => product.id === id);
    return product;
}

Product.create= async (name, description, price) => {
    const id = uuidv4()

    await db.data.products.push({id,name, description, price})

    await db.write();

    return {id, name, description, price}
}

export {Product}