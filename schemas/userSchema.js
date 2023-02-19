const mongoose = require('mongoose');

const requiredString = {
    type: String,
    required: true
};

const userSchema = new mongoose.Schema({
    userId: requiredString,
    firstName: requiredString,
    middleName: requiredString,
    lastName: requiredString,
    email: requiredString,
    username: requiredString,
    password: requiredString,
    roles: [requiredString],
    status: String,
    address: String,
    contact_number: Number,
    gender: String,
    civil_status: String,
    membership_date: Date,   
}, { timestamps: true });

module.exports = userSchema;