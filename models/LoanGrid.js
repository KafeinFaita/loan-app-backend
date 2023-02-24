const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const loanGridSchema = require('../schemas/loanGridSchema');

const LoanGrid = mongoose.model('LoanGrid', loanGridSchema);

class LoanGridModel {

    async getAll() {
        try {
            const loanGrids = await LoanGrid.find();
            return loanGrids;
        } catch (error) {
            throw error;
        }
    }

    async createNew({ minLoan, maxLoan, maxTerm, coMakers, yearsOfResidency, fixedDepositFactor, processingFee }) {
        try {
            const loanGridId = nanoid(10);
            const loanGrid = new LoanGrid({ loanGridId, minLoan, maxLoan, maxTerm, coMakers, yearsOfResidency, fixedDepositFactor, processingFee });
            await loanGrid.save();
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(id) {
        try {
            await LoanGrid.deleteOne({ loanGridId: id });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LoanGridModel;