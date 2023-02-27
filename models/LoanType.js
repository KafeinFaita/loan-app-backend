const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const loanTypeSchema = require('../schemas/loanTypeSchema');

const LoanType = mongoose.model('LoanType', loanTypeSchema);

class LoanTypeModel {
    async getOne(id) {
        try {
            const loanType = await LoanType.findOne({ loanTypeId: id });
            return loanType;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const loanTypes = await LoanType.find();
            return loanTypes;
        } catch (error) {
            throw error;

        }
    }

    async createNew({ name, maxLoanAmount, interestRate }) {
        try {
            const loanTypeId = nanoid(10);
            const loanType = new LoanType({ loanTypeId, name, maxLoanAmount, interestRate });
            await loanType.save();
        } catch (error) {
            throw error;
        }
    }

    async updateOne(id, updates) {
        try {
            await LoanType.findOneAndUpdate({loanTypeId: id}, updates);
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(id) {
        try {
            await LoanType.deleteOne({ loanTypeId: id });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LoanTypeModel;