const mongoose = require('mongoose');

const buyingSchema = new mongoose.Schema({
    buy_wood_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BuyWoodType', // Referencing the 'tree_types' collection
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

const Buying = mongoose.model('Buying', buyingSchema);

module.exports = Buying;
