
import  Recipe from '../model/recipe.js';

async function addRecipes(req, res) {
    try{
        const {title, content} = await req.body;
        if(!title && content ){
            let generatedTitle = content.slice(0,10);
            await Recipe.create(generatedTitle, content);
            res.status(200).json({generatedTitle, content});
        }
        // IF TITLE AND CONTENT ARE NOT UNDEFINED
        if(title && content){
            await Recipe.create(title, content);
            res.status(200).json({title, content});
        }
        Promise.reject(new Error('Title or content undefined'))

    } catch(err) {

        console.error(err);
        res.status(500);
    }
}

async function getRecipes(req, res){
    const recipes = await Recipe.get();

    res.status(200).json(recipes);
}
export {addRecipes,getRecipes}