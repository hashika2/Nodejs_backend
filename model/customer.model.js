const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 150,
        required: true,
    },
    NIC: {
        type: String,
        maxLength: 50,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    email_verified_at: {
        type: Date,
        default: null,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contact_no: {
        type: String,
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

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
