const mongoose = require('mongoose');

const requiredString = {
    type: String,
    required: true
};

const userSchema = new mongoose.Schema({
    first_name: requiredString,
    middle_name: requiredString,
    last_name: requiredString,
    email: requiredString,
    username: requiredString,
    password: requiredString,
    roles: [{ type: mongoose.Types.ObjectId, required: true }],
    status: String,
    address: String,
    contact_number: Number,
    gender: String,
    civil_status: String,
    membership_date: Date,   
}, { timestamps: true });

module.exports = userSchema;