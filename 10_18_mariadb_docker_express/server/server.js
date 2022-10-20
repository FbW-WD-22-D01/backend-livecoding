import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import {productRouter} from './src/router/product.router.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.get("/", (req,res) => {
    res.status(200).send({msg:"Home"})
} )

app.use("/products", productRouter);


app.listen(process.env.SERVER_PORT, () => {
    console.log("Server listening at port: " + process.env.SERVER_PORT)
});