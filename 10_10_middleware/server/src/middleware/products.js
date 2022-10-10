function containsProductToCreate(req, res, next) {
    const {title, content, price} = req.body;
    if (title && content && price){
        next();     
    } else {
        next(new Error("Leider ist das produkt nicht vorhanden"));
    }
}


export {containsProductToCreate}