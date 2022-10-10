import express from 'express';
import { filterId } from '../middleware/products.js';
import { validateResponse } from '../controller/productsController.js';

const productRouter = express.Router();

productRouter.route('/:id')
  .get(filterId , validateResponse)
  .post(filterId , validateResponse)

productRouter.route('/add/:id').post((req,res) => {
    res.send("Succesfully inserted Product")
})

export {productRouter}