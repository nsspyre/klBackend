import * as mongoose from 'mongoose';

/**
 * Mongo Schema for Products
 */

const IngredientsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    calories: Number,
});

const OptionsSchema = new mongoose.Schema({
    name: String,
    ingredients: [IngredientsSchema],
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
    options: [OptionsSchema],
});
