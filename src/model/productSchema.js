import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String },
  model: { type: String },
  price: { type: String },
  description: { type: String },
  color: { type: String },
  os: { type: String }
});

export const Product =  model('Product', productSchema);
