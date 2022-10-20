import {db} from '../config/db.js'
const Product = {};

// CREATE
Product.create = async (name,description,price) =>  {
    try {
        // Start db connection 
        const conn = await db.getConnection();

        // Query                                                         ? = placeholder
        const sql = "INSERT INTO products (name,description,price) VALUES (?,?,?)";
        // Get result from Query (will always return an array)
        const rows = await conn.query(sql, [name,description,price]);

        // End db connections
        conn.end();

    } catch (err) {
        // Stop Programm and throw Error
        throw err;
    }
}


// READ
Product.get = async () =>  {
    try {
        // Start db connection 
        const conn = await db.getConnection();

        // Query                                                         ? = placeholder
        const sql = "SELECT id,name,description,price FROM products";
        // Get result from Query (will always return an array)
        const rows = await conn.query(sql);

        // End db connection
        conn.end();
        
        // if the array is not empty return all entries
        if (rows.length >= 1) {
            return rows;
        } 
        // if false then there is no data
        else {
            return false;
        }
    } catch (err) {
        // Stop Programm and throw Error
        throw err;
    }
}
Product.getById = async (productId) =>  {
    try {
        // Start db connection 
        const conn = await db.getConnection();

        // Query                                                         ? = placeholder
        const sql = "SELECT id,name,description,price FROM products WHERE id = ?";
        // Get result from Query (will always return an array)
        const rows = await conn.query(sql, productId);

        // End db connection
        conn.end();
        
        // if the array is not empty return first entry because we only ask for one product
        if (rows.length == 1) {
            return rows[0];
        } 
        // if false then there is no data
        else {
            return false;
        }
    } catch (err) {
        // Stop Programm and throw Error
        throw err;
    }
}

// Product.update = async (id, newProduct) => {
// //hole datensatz der bearbeitet werden soll
//     const product = db.data.products.find((product) => product.id === id );
//     const {name, description, price} = newProduct
//     if(name){
//         product.name = name;
//     }
//     if(description){
//         product.description = description;
//     }
//     if(price){
//         product.price = price;
//     }

//     await db.write();

//     return product;
    
// }

// Product.delete = async (id) => {

//     const productIndex = db.data.products.findIndex(product => product.id === id);

//     // If productIndex could not be found then findIndex returns -1 
//     // So it doesnt slices the last Element in the products arrays, 
//     // we have to check if productIndex doesnt return -1 before trying to delete the product
//     if(productIndex != -1){
//         const deletedProducts = db.data.products.splice(productIndex, 1);
//         await db.write();
//         return deletedProducts[0];
//     } else {
//         return false;
//     }

// }

export {Product}