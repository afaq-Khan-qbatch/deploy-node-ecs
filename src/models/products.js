import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: String,
  price: String,
  image: String,
  description: String
}, {
  timestamps: true
});

const Products = model('products', schema, 'products');

export default Products;
