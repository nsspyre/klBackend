import * as mongoose from 'mongoose';

/**
 * Mongo Schema for User
 */

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  age: Number,
  password: { type: String, required: true },
  salt: String,
  token: String,
  phone: String,
  isPreferred: { type: Boolean, default: false, required: false },
  username: String,
  address: String,
  name: String,
  lastname: String,
  role: { type: String, default: 'user' },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});
