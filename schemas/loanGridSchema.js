const mongoose = require('mongoose');

const loanGridSchema = new mongoose.Schema({
    loanGridId: {
        type: String,
        required: true  
    },
    minLoan: {
        type: Number,
        required: true
    },
    maxLoan: {
        type: Number,
        required: true
    },
    maxTerm: {
        type: Number,
        required: true
    },
    coMakers: {
        type: Number,
        required: true
    },
    yearsOfResidency: {
        type: Number,
        required: true
    },
    fixedDepositFactor: {
        type: Number,
        required: true
    },
    processingFee: {
        type: Number,
        required: true
    },
}, { timestamps: true });

module.exports = loanGridSchema;