const mongoose = require('mongoose');
const { Model } = mongoose;
const ProductSchema = require('../schema');

class Product extends Model {

}


module.exports = mongoose.model(Product, ProductSchema, 'products');