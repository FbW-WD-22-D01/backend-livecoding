import express, {json} from 'express'
import cors from 'cors';
import { checkUser } from './middleware/users.js';
import { loginUser } from './controller/userController.js';

import {productRouter} from './route/productsRouter.js';

// Initialize express
const app = express()

// Global middlewares
app.use(json())
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))

// All router
app.use('/products', productRouter)


// routes
app.post('/login', checkUser , loginUser);
 

// Error handling middleware
app.use((error, req, res) => {
  console.log(error);
  res.send(error);
});

// Server Application on given port
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})