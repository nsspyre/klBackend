import * as mongoose from 'mongoose';
import { ProductsSchema } from './Products.schema';

/**
 * Mongo Schema for Orders
 */

export const OrdersSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    quantity: Number,
    date: { type: Date, default: Date.now() },
    products: [ProductsSchema],
    location: String,
    total: Number,
    addressDescription: String,
});
