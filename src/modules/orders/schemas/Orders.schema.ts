import * as mongoose from 'mongoose';
import { ProductsSchema } from '../../products/schemas/Products.schema';
import autoPopulate = require('mongoose-autopopulate');

/**
 * Mongo Schema for Orders
 */

const OrdersSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  quantity: Number,
  createdAt: { type: Date, default: new Date() },
  dateTimestamp: { type: Number, default: Date.now() },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
      autopopulate: true,
    },
  ],

  location: String,
  total: Number,
  addressDescription: String,
});

ProductsSchema.plugin(autoPopulate);

export { OrdersSchema };
