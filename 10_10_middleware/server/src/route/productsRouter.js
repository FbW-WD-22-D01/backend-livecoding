import express from 'express';
import { containsProductToCreate } from '../middleware/products.js';
import { insertProduct, getProducts, getProductById } from '../controller/productsController.js';

const productRouter = express.Router();

// productRouter.route('/:id')
//   .get(filterId , insertProduct)
//   .post(filterId , insertProduct)

productRouter.route('/add').post(containsProductToCreate, insertProduct)

productRouter.route('/').get(getProducts);

productRouter.route('/:id').get(getProductById);

export {productRouter}

