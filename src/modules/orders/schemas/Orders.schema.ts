import * as mongoose from 'mongoose';
import { ProductsSchema } from './Products.schema';

/**
 * Mongo Schema for Orders
 */

export const OrdersSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    quantity: Number,
    date: { type: Date, default: Date.now() },
    products: [ProductsSchema],
    location: String,
    total: Number,
    addressDescription: String,
});
