const mongoose = require('mongoose');

const failedJobSchema = new mongoose.Schema({
    uuid: {
        type: String,
        unique: true,
        required: true,
    },
    connection: {
        type: String,
        required: true,
    },
    queue: {
        type: String,
        required: true,
    },
    payload: {
        type: String,
        required: true,
    },
    exception: {
        type: String,
        required: true,
    },
    failed_at: {
        type: Date,
        default: Date.now,
    },
});

const FailedJob = mongoose.model('FailedJob', failedJobSchema);

module.exports = FailedJob;
