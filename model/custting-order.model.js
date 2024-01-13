const mongoose = require('mongoose');

const cuttingSchema = new mongoose.Schema({
    cutting_type: {
        type: String,
        required: true,
    },
    tree_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TreeType', // Referencing the 'tree_types' collection
        required: true,
    },
    circumference: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    volume: {
        type: Number,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
    subtotal: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    transport: {
        type: Number,
        required: true
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

const Cutting = mongoose.model('Cutting', cuttingSchema);

module.exports = Cutting;
