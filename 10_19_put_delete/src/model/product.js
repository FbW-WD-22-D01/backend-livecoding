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

Product.update = async (id, newProduct) => {
//hole datensatz der bearbeitet werden soll
    const product = db.data.products.find((product) => product.id === id );
    const {name, description, price} = newProduct
    if(name){
        product.name = name;
    }
    if(description){
        product.description = description;
    }
    if(price){
        product.price = price;
    }

    await db.write();

    return product;
    
}

Product.delete = async (id) => {

    const productIndex = db.data.products.findIndex(product => product.id === id);

    const deletedProducts = db.data.products.splice(productIndex, 1);

    await db.write();
    return deletedProducts[0];

}

export {Product}