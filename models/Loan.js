const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const loanSchema = require('../schemas/loanSchema');

const Loan = mongoose.model('Loan', loanSchema);

class LoanModel {

    async getAll() {
        try {
            // 2nd argument of populate is a field selection string
            const loans = await Loan.find().populate('user loanType', '-password -roles');
            return loans;
        } catch (error) {
            throw error
        }
    }

    async createNew({ loanAmount, loanType, grid }, user) {
        try {
            const loanId = nanoid(10);
            const loan = new Loan({ loanId, loanAmount, loanType, grid, user })

            await loan.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LoanModel;