const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    image_url: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
