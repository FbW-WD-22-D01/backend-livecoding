import { db } from '../config/lowdb.js';
import {Product} from '../model/product.js'

async function getAllProducts(req, res){
    const products = await Product.get();
    res.status(200).json(products)

}

async function getProductById(req, res){
    // 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
    const {id} = req.params;

    const product = await Product.getById(id);
    if(product){
        res.status(200).send(product)
    }else {
        res.status(404).send("Produkt konnte nicht gefunden werden");
    }
}

async function addProduct(req, res) {
    // "name": "Nintendo",
    // "description": "Artikelbeschreibung",
    // "price": "100.00€"
    const {name, description, price} = req.body;

    const product = await Product.create(name, description, price);

    res.status(200).json(product) 
}

async function updateProductById(req, res) {
    const {id} = req.params;
    
    const {newProduct} = req.body;
    
    console.log(newProduct);
    const product = await Product.update(id, newProduct);
        
    res.status(200).json(product)

}

async function deleteProductById(req, res, next){
    const {id} = req.params;

    const deletedProduct = await Product.delete(id);

    if(deletedProduct){
        res.status(200).json(deletedProduct)
    }else {
     const error = new Error("Das Produkt mit der ID: " + id + " existiert nicht.")
     error.status = 404;
     next(error);
    }

}



export {getAllProducts, getProductById, addProduct, updateProductById, deleteProductById}