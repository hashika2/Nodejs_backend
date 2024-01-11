const mongoose = require('mongoose');

const buyWoodTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
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

const BuyWoodType = mongoose.model('BuyWoodType', buyWoodTypeSchema);

module.exports = BuyWoodType;
