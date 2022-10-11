
import { Router } from "express";
import { checkValidId, checkValidProduct } from "../middleware/product.js";
import { getAllProducts, getProductById, addProduct } from "../controller/productController.js";

const productRouter = Router();

// GET
productRouter.route('/').get(getAllProducts);
productRouter.route('/:id').get(checkValidId,getProductById);

//CREATE
productRouter.route('/add').post(checkValidProduct, addProduct)

export {productRouter};