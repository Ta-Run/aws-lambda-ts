// import { Schema, model } from "mongoose";
const {Schema} = require('mongoose');
const {model} = require ('mongoose')

const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String },
  model: { type: String },
  price: { type: String },
  description: { type: String },
  color: { type: String },
  os: { type: String }
});

exports.Product =  model('Product', productSchema);
