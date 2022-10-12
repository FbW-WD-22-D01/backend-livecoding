import express from "express";
import {local} from './src/config/constants.js'
import { getAllProducts, getProductById } from "./src/controller/productController.js";
import errorHandler from "./src/middleware/errorHandler.js";
import {checkValidId} from './src/middleware/product.js';
import { Product } from "./src/model/product.js";
// CONSTANTS
const {PORT} = local;

// INIT EXPRESS
const app = express();

app.use(express.json());

// ATTENTION! If next argument is not defined the error-handler cant go on

app.get("/products", getAllProducts);

app.get("/products/:id", checkValidId,  getProductById);

app.post("/products/add", checkValidProduct, addProduct)

async function checkValidProduct(req, res, next) {
    // "name": "Nintendo",
    // "description": "Artikelbeschreibung",
    // "price": "100.00€"
    const {name, description, price} = req.body;

    if(name && description && price){
        next();
    }else {
        const error = new Error('Name, description or price not Found')
        error.status = 404;
        next(error);
    }
    
}
async function addProduct(req, res) {
    // "name": "Nintendo",
    // "description": "Artikelbeschreibung",
    // "price": "100.00€"
    const {name, description, price} = req.body;
    const product = Product.create(name, description, price);
    res.status(200).json(product)
    
}
app.use(errorHandler)

// SERVER EXPRESS ON DEFINED PORT
app.listen(PORT, () => {
    console.log("Server listen on port: ", PORT)
})


// client anfrage: /products/delete/:id -> middelware -> controller -> model - Product.delete

// client anfrage: /products -> middelware -> controller -> model - Product.get
// /products/delete/1