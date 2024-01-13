const mongoose = require('mongoose');

const sellingSchema = new mongoose.Schema({
    selling_type: {
        type: String,
        required: true,
    },
    selling_item:{
        type: Array,
        default: []
    },
    // product_type_id: { // need to check
    //     type: String,
    //     required: true,
    // },
    sub_total: {
        type: Number,
        required: true,
    },
    transport: {
        type: Number,
        required: true
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

const Selling = mongoose.model('Selling', sellingSchema);

module.exports = Selling;
