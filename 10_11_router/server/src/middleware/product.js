import {validate as uuidValidate} from 'uuid'

function checkValidId(req, res, next){
    // 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
    const {id} = req.params;
   if(uuidValidate(id) === true){
        next();
   }else{
        if(process.env.NODE_ENV === "production"){
            res.status(500).send("Error occured, take a look at your server logs!");
        }else {
            const error = new Error('Die id hat nicht das korrekte Format!');
            error.status = 400;
            next(error)
        }
   };

}

async function checkValidProduct(req, res, next) {
    // "name": "Nintendo",
    // "description": "Artikelbeschreibung",
    // "price": "100.00€"
    const {name, description, price} = req.body;

    if(name && description && price){
        next();
    }else {
        const error = new Error('Name, description or price not Found')
        error.status = 404;
        next(error);
    }
    
}

export {checkValidId, checkValidProduct}