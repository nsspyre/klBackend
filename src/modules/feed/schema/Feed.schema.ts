import * as mongoose from 'mongoose';
import { OrdersSchema } from '../../orders/schemas/Orders.schema';
import { ProductsSchema } from '../../products/schemas/Products.schema';

/**
 * Mongo Schema for Feed
 */

export const FeedSchema = new mongoose.Schema({
    orders: [OrdersSchema],
    recommended: [ProductsSchema],
});
