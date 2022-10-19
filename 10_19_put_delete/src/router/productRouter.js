import { Router } from "express";
import { checkValidId, checkValidProduct } from "../middleware/product.js";
import { getAllProducts, getProductById, addProduct, updateProductById, deleteProductById } from "../controller/productController.js";

const productRouter = Router();
// CREATE
productRouter.route('/add').post(checkValidProduct, addProduct)

// READ
productRouter.route('/').get(getAllProducts);

productRouter.route('/:id')
// READ
    .get(checkValidId, getProductById)
// UPDATE 
    .put(checkValidId, updateProductById)
// DELETE
    .delete(checkValidId, deleteProductById);
// localhost:8080/products/Hallo --> req.params.id === Hallo
// localhost:8080/products?id=123 --> req.query.id




export {productRouter}; 