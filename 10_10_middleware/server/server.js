import express from 'express'
import cors from 'cors';
import { checkUser } from './src/middleware/users.js';
import { loginUser } from './src/controller/userController.js';

import {productRouter} from './src/route/productsRouter.js';

const port = 8080;

// Initialize express
const app = express();

// Global middlewares
app.use(express.json());

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// ### ROUTERS ###

// Product router
app.use('/products', productRouter);

// ### ROUTES ###
app.post('/login', checkUser , loginUser);
 
// Error handling middleware
app.use((error, req, res) => {
  console.log(error);
  res.status(400).send(error);
});

// Server Application on given port
app.listen(port, function () {
  console.log('CORS-enabled web server listening on port 80')
})