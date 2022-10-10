import db from "../config/config.js";

const Product = {};

// GET ALL PRODUCTS
Product.get = async () => {
    try {
        const {products} =  await db.data;
        return products;
    } catch(err) {
        return Promise.reject(new Error(err));
    }
};

// GET PRODUCT BY ID
Product.getById = async (id) => {
    try {
        const {products} =  await db.data;
        return products.find((product) => product.id == id);
    } catch(err) {
        return Promise.reject(new Error(err));
    }
};

// CERATE PRODUCT
Product.create = async ({id, title, content,price}) => {
    try {
        const {products} =  await db.data;
        products.push({id, title, content, price });
        await db.write();
        return {title, content, price};
    } catch(err) {
        return Promise.reject(new Error(err));
    }
};

export {Product}