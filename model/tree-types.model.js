const mongoose = require('mongoose');

const treeTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        maxLength: 20,
        required: true,
    },
    cube_price: {
        type: Number,
        required: true,
    },
    clean_price: {
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

const TreeType = mongoose.model('TreeType', treeTypeSchema);

module.exports = TreeType;
