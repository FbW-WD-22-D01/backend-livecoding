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
        await conn.query(sql, [name,description,price]);

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

Product.update = async (id, newProduct) => {
    
    // Start db connection 
    const conn = await db.getConnection();

    // UPDATE `products` SET
    // `name` = 'ProductA',
    // `description` = 'Mein produkt',
    // `price` = '2.00'
    // WHERE `id` = '1'
    const {name, description, price} = newProduct;
    const sql = "UPDATE `products` SET `name` = ?, `description` = ?, `price` = ? WHERE `id` = ?";
    await conn.query(sql, [name, description, price, id])
        
    // End db connection
    conn.end();

    return {name, description, price};
    
}

Product.delete = async (id) => {
 // TODO if product to be deleted doesnt exist
try {
  // Start db connection 
  const conn = await db.getConnection();

  // DELETE FROM `products`
  // WHERE ((`id` = '3'));
  const sql = "DELETE FROM `products` WHERE ((`id` = ?))";
  await conn.query(sql, id);
      
  // End db connection
  conn.end();

  return "Successfully deleted";
} catch(error){
    console.log(error);
}
  

    // const productIndex = db.data.products.findIndex(product => product.id === id);

    // // If productIndex could not be found then findIndex returns -1 
    // // So it doesnt slices the last Element in the products arrays, 
    // // we have to check if productIndex doesnt return -1 before trying to delete the product
    // if(productIndex != -1){
    //     const deletedProducts = db.data.products.splice(productIndex, 1);
    //     await db.write();
    //     return deletedProducts[0];
    // } else {
    //     return false;
    // }

}

export {Product}

