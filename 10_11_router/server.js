import express from "express";
import {local} from './src/config/constants.js'
import { getAllProducts } from "./src/controller/productController.js";
import errorHandler from "./src/middleware/errorHandler.js";

// CONSTANTS
const {PORT} = local;

// INIT EXPRESS
const app = express();

app.use(express.json());

// ATTENTION! If next argument is not defined the error-handler cant go on

app.get("/products", getAllProducts);


app.use(errorHandler)

// SERVER EXPRESS ON DEFINED PORT
app.listen(PORT, () => {
    console.log("Server listen on port: ", PORT)
})


// client anfrage: /products/delete/:id -> middelware -> controller -> model - Product.delete

// client anfrage: /products -> middelware -> controller -> model - Product.get
// /products/delete/1