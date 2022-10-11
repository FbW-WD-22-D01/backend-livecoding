import { db } from "../config/lowdb.js";

const Product = {};


Product.get = async () => {
    await db.read();
    const products = db.data.products;
    return products;
}

export {Product}