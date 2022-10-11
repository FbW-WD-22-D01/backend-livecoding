import express from "express";
import {local} from './src/config/constants.js'
import { getAllProducts, getProductById, addProduct } from "./src/controller/productController.js";
import errorHandler from "./src/middleware/errorHandler.js";
import {checkValidId, checkValidProduct} from './src/middleware/product.js';
import { Product } from "./src/model/product.js";
import cors from 'cors'
// CONSTANTS
const {PORT} = local;

// INIT EXPRESS
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// ATTENTION! If next argument is not defined the error-handler cant go on

app.get("/products", getAllProducts);

app.get("/products/:id", checkValidId,  getProductById);

app.post("/products/add", checkValidProduct, addProduct)



app.use(errorHandler)

// SERVER EXPRESS ON DEFINED PORT
app.listen(PORT, () => {
    console.log("Server listen on port: ", PORT)
})


// client anfrage: /products/delete/:id -> middelware -> controller -> model - Product.delete

// client anfrage: /products -> middelware -> controller -> model - Product.get
// /products/delete/1