import * as mongoose from 'mongoose';
/**
 * Mongo Schema for Options
 */

const OptionsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  calories: Number,
  extraType: { type: String, required: false },
  isExtra: { type: Boolean, default: false },
  onStock: { type: Boolean, default: true },
});

export {
    OptionsSchema,
};
