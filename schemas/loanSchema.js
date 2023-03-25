const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    loanId: {
        type: String,
        required: true
    },
    loanAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "Processing"
    },
    disapproveReason: String,
    loanType: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'LoanType',
        required: true
    },
    grid: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'LoanGrid',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    coMakers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true })

module.exports = loanSchema;