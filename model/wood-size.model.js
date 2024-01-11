const mongoose = require('mongoose');

const woodSizeSchema = new mongoose.Schema({
    wood_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WoodType', // Referencing the 'wood_types' collection
        required: true,
    },
    size: {
        type: String,
        maxLength: 50,
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

const WoodSize = mongoose.model('WoodSize', woodSizeSchema);

module.exports = WoodSize;
