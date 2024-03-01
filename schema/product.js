const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaOptions = {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
};

const ProductSchema = new Schema({
    title: String,
    description: String,
    available_stock: Number,
    price: Number,
    category: String,
    brand: String,
}, schemaOptions);

ProductSchema.index({ title: 'text' }, { name: 'textIndex' });

module.exports = ProductSchema;