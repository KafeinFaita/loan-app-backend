const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const dayjs = require('dayjs');
const loanSchema = require('../schemas/loanSchema');

const Loan = mongoose.model('Loan', loanSchema);

class LoanModel {

    async getAll() {
        try {
            // 2nd argument of populate is a field selection string
            const loans = await Loan.find().populate('user loanType', '-password -roles').lean();
            loans.forEach(loan => loan.createdAt = dayjs(loan.createdAt).format('MMMM D, YYYY'));
            console.log(loans)
            return loans;
        } catch (error) {
            throw error
        }
    }

    async getOne(id) {
        try {
            const loan = await Loan.findOne({ loanId: id }).populate('user loanType grid', '-password').lean();
            loan.createdAt = dayjs(loan.createdAt).format('MMMM D, YYYY');
            return loan;
        } catch (error) {
            console.log('Error!')
            throw error;
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

    async updateOne(id, { loanAmount, loanType, grid }) {
        try {
            const loan = await Loan.findOne({ loanId: id });
            loan.loanAmount = loanAmount;
            loan.loanType = loanType;
            loan.grid = grid;

            await loan.save();
        } catch (error) {
            throw error;
        }
    }

    async updateStatus(id, { status, disapproveReason }) {
        try {
            const loan = await Loan.findOne({ loanId: id });
            loan.status = status;
            if (disapproveReason) {
                loan.disapproveReason = disapproveReason;
            }
            await loan.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LoanModel;