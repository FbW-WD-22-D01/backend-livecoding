function containsProductToCreate(req, res, next) {
    const {title, content, price} = req.body;

    if (title && content && price){
        next();     
    } else {
        next(new Error("Leider ist das produkt nicht vorhanden"));
        return res.status(400).send("Product not found");
    }
}


export {containsProductToCreate}