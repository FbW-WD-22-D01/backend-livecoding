function filterId (req,res, next) {
    const {id} = req.params;

    if (id != 1){
        next(new Error("Leider ist das produkt nicht vorhanden"))
    }
    next();
}


export {filterId}