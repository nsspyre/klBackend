import * as mongoose from 'mongoose';

/**
 * Mongo Schema for Products
 */

const OptionsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    calories: Number,
    extraType: String,
    isExtra: { type: Boolean, default: false },
    onStock: { type: Boolean, default: true },
});

const ProductOptionsSchema = new mongoose.Schema({
    name: String,
    maxQuantity: Number,
    isSize: { type: Boolean, default: false },
    options: [OptionsSchema],
});

export const ProductsSchema = new mongoose.Schema({
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
    productOptions: [ProductOptionsSchema],
});
