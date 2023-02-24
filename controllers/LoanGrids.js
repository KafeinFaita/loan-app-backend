const LoanGridModel = require('../models/LoanGrid');
const LoanGrid = new LoanGridModel;

class LoanGridController {
    async index(req, res) {
        try {
            const loanGrids = await LoanGrid.getAll();
            res.json(loanGrids);
        } catch (error) {
            throw error;
        }
    }

    async create(req, res) {
        try {
            await LoanGrid.createNew(req.body);
            res.json({ msg: "ok" });
        } catch (error) {
            throw error;
        }
    }

    async delete(req, res) {
        try {
            await LoanGrid.deleteOne(req.params.id);
            res.json({ msg: 'ok' })
        } catch (error) {
            throw error
        }
    }
}

module.exports = new LoanGridController;