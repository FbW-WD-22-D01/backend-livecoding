import { v4 as uuidv4 } from 'uuid';
import db from '../config/config.js'; 

const Recipe = {};

Recipe.create = async (title, content) => {

    // GENERATE RANDOM UUID
    const id = uuidv4();
    // ADD RECIPE TO RECIPES ARRAY READ FROM JSON
    await db.data.recipes.push({id, title, content})
    // WRITE CHANGES TO ARRAY TO JSON FILE
    await db.write();

}

export default Recipe;