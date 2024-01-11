const mongoose = require('mongoose');

const sellingSchema = new mongoose.Schema({
    selling_type: {
        type: String,
        required: true,
    },
    wood_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WoodType', // Referencing the 'tree_types' collection
        required: true,
    },
    product_type_id: { // need to check
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
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
