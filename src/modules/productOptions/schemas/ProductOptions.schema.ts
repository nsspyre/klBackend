import * as mongoose from 'mongoose';
import autoPopulate = require('mongoose-autopopulate');

const ProductOptionsSchema = new mongoose.Schema({
  name: String,
  maxQuantity: Number,
  isSize: { type: Boolean, default: false },
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Options',
      autopopulate: true,
    },
  ],
});

ProductOptionsSchema.plugin(autoPopulate);

export {
    ProductOptionsSchema,
};
