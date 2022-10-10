import express, {json} from 'express'
import cors from 'cors';
import { filterId } from './middleware/products.js';
import { validateResponse } from './controller/productsController.js';
import { checkUser } from './middleware/users.js';
import { loginUser } from './controller/userController.js';

const app = express()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(json())
app.use(cors(corsOptions))

app.get('/products/:id', filterId , validateResponse)


app.post('/login', checkUser , loginUser);
 


app.use((error) => {
  console.log(error);
});

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})