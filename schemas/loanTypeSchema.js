const mongoose = require('mongoose');

const loanTypeSchema = new mongoose.Schema({
    loanTypeId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    maxLoanAmount: {
        type: Number,
        required: true
    },
    interestRate: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = loanTypeSchema;