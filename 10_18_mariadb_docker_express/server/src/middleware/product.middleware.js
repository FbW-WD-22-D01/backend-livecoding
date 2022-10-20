function checkValidProduct(req, res, next) {
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

export {checkValidProduct}