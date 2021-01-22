import * as mongoose from 'mongoose';
import autoPopulate = require('mongoose-autopopulate');

/**
 * Mongo Schema for Products
 */

const ProductsSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  price: Number,
  description: String,
  type: Number,
  weight: Number,
  size: String,
  isFavorite: { type: Boolean, default: false },
  img: { type: Object, default: { uri: '' } },
  sizes: [{ size: String, price: Number, weight: Number }],
  productOptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductOptions',
      autopopulate: true,
    },
  ],
});

ProductsSchema.plugin(autoPopulate);

export { ProductsSchema };
