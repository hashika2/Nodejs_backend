const mongoose = require('mongoose');

const passwordResetSchema = new mongoose.Schema({
    email: {
        type: String,
        index: true,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const PasswordReset = mongoose.model('PasswordReset', passwordResetSchema);

module.exports = PasswordReset;
