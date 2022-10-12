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
export {checkValidId}