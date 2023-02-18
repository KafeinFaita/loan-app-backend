const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    roleId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    privileges: {
        type: [String],
        required: true
    }
}, { timestamps: true });

module.exports = roleSchema;