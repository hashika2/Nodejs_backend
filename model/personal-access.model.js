const mongoose = require('mongoose');

const personalAccessTokenSchema = new mongoose.Schema({
    tokenable: {
        type: {
            id: mongoose.Schema.Types.ObjectId,
            type: String,
        },
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        unique: true,
        required: true,
    },
    abilities: {
        type: String,
        default: null,
    },
    last_used_at: {
        type: Date,
        default: null,
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

const PersonalAccessToken = mongoose.model('PersonalAccessToken', personalAccessTokenSchema);

module.exports = PersonalAccessToken;
