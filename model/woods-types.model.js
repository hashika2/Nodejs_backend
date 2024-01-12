const mongoose = require('mongoose');

const woodTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    planks_price: {
        type: Number,
        default: null,
    },
    regal_price: {
        type: Number,
        default: null,
    },
    fire_wood: {
        type: Number,
        default: null,
    },
    transport: {
        type: Number,
        default: null,
    },
    wood_size: [
        {size: {
            type: String,
            maxLength: 50,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },}
    ],
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

const WoodType = mongoose.model('WoodType', woodTypeSchema);

module.exports = WoodType;
