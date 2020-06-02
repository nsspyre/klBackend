import * as mongoose from 'mongoose';
import { ProductsSchema } from '../../products/schemas/Products.schema';
/**
 * Mongo Schema for Orders
 */

export const OrdersSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    quantity: Number,
    createdAt: { type: Date, default: new Date() },
    dateTimestamp: { type: Number, default: Date.now() },
    products: [ProductsSchema],
    location: String,
    total: Number,
    addressDescription: String,
});
