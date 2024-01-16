const mongoose = require('mongoose');

const productCartSchema = new mongoose.Schema({
    cart_item:{
        type: Array,
        default: []
    },
    total: {
        type: Number,
        required: true,
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer', // Referencing the 'tree_types' collection
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

const ProductCart = mongoose.model('ProductCart', productCartSchema);

module.exports = ProductCart;
