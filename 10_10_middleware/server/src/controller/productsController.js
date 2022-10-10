import { Product } from "../model/product.js";
import {v4 as uuidv4} from 'uuid';

// Params: req.params  -> localhost:8080/products/:id
// Queries: req.queries -> localhost:8080/products?id=2&name=Max // Nach dem Fragezeichen werden die Queries separat mit einem & Zeichen aufgeführt
// Body: req.body -> localhost:8080/products

async function insertProduct(req, res) {
    // GENERATE RANDOM UUID, WILL BE USED LATER AS THE UNIQUE IDENTIFIER TO FIND A SPECIFIC PRODUCT
    const id = uuidv4();
    
    // GET DATA FROM BODY
    // Body: req.body -> localhost:8080/products
    const {title, content, price} = req.body;
    
    // CREATE PRODUCT AND RETURN THE VALUES OF IT
    const createdProduct = await Product.create({id, title, content, price});

    // SEND RESPONSE TO CLIENT WITH SUCCESS MESSAGE AND CREATED PRODUCT
    res.json({msg: 'Das Produk wurde erfolgreich erstellt.', product: createdProduct})
}

async function getProducts(req, res){
    // GET PRODUCTS 
    const products = await Product.get();
    // RETURN PRODUCTS
    res.status(200).json(products)
}

async function getProductById(req, res){
    // GET ID FROM PARAMS
    // Params: req.params  -> localhost:8080/products/:id
    const {id} = req.params;
    const product = await Product.getById(id);
    res.status(200).json(product)
}

export {insertProduct, getProducts, getProductById}