const LoanTypeModel = require('../models/LoanType');
const LoanType = new LoanTypeModel;

class LoanTypeController {
    async index(req, res) {
        try {
            const loanTypes = await LoanType.getAll();
            res.json(loanTypes);
        } catch (error) {
            throw error;
        }
    }

    async show(req, res) {
        try {
            const loanType = await LoanType.getOne(req.params.id)
            res.json(loanType);
        } catch (error) {
            throw error;
        } 
    }

    async create(req, res) {
        try {
            await LoanType.createNew(req.body);
            res.status(200).json({msg:'ok'});
        } catch (error) {
            throw error;
        }
    }

    async edit(req, res) {
        try {
            await LoanType.updateOne(req.params.id, req.body);
            res.json({ msg: 'ok' })
        } catch (error) {
            throw error;
        }
    }

    async delete(req, res) {
        try {
            await LoanType.deleteOne(req.params.id);
            res.status(200).json({msg:'ok'});
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new LoanTypeController;