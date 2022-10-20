import {Router} from "express";
import { checkValidProduct } from "../middleware/product.middleware.js";
import { addProduct,getAllProducts, getProductById } from "../controller/product.controller.js";

const productRouter = Router();
// CREATE
productRouter.route('/add').post(checkValidProduct, addProduct)

// READ
productRouter.route('/').get(getAllProducts);

productRouter.route('/:id')
// READ
    .get(getProductById)
// // UPDATE 
//     .put(updateProductById)
// // DELETE
//     .delete(deleteProductById);
// localhost:8080/products/Hallo --> req.params.id === Hallo
// localhost:8080/products?id=123 --> req.query.id




export {productRouter}; 