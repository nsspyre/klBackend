import * as mongoose from 'mongoose';

/**
 * Mongo Schema for Products
 */

export const ProductsSchema = new mongoose.Schema({
    flavor: [{ name: String, price: Number }],
    toppings: [{ name: String, price: Number }],
    fruits: [{ name: String, price: Number }],
    price: Number,
    comments: String,
});
