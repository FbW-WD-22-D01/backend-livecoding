import express from "express";
// ### CONSTANTS ###
import {local} from './src/config/constants.js'

// ### MIDDLEWARE ###
import cors from 'cors'
// Error Handler
import errorHandler from "./src/middleware/errorHandler.js";

// ### ROUTER ###
import { productRouter } from "./src/route/productsRouter.js";

// CONSTANTS
const {PORT} = local;

// INIT EXPRESS
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// ROUTES
app.use("/products", productRouter)


app.use(errorHandler)

// SERVER EXPRESS ON DEFINED PORT
app.listen(PORT, () => {
    console.log("Server listen on port: ", PORT)
})


// client anfrage: /products/delete/:id -> middelware -> controller -> model - Product.delete

// client anfrage: /products -> middelware -> controller -> model - Product.get
// /products/delete/1