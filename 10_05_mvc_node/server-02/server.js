import express from 'express';
import { addRecipes, getRecipes } from './controller/recipeController.js';
import db from './config/config.js';


const app = express();

const port = 8080;

app.use(express.json())

app.get("/recipes", getRecipes);

app.post("/recipes/add", addRecipes)


app.listen(port, () => {
    console.log("Express server running on port: ", port)
})