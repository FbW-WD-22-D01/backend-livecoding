import express from 'express';
import { getRecipes } from './controller/recipeController.js';



const app = express();

const port = 8080;

app.use(express.json())

/* app.get("/recipes", (req, res) => {
    const {recipes} = db.data;
    res.send(recipes);
} ); */

app.post("/recipes/add", getRecipes)


app.listen(port, () => {
    console.log("Express server running on port: ", port)
})