const LoanModel = require('../models/Loan');
const UserModel = require('../models/User');
const Loan = new LoanModel;
const User = new UserModel;

class LoanController {
    async index(req, res) {
        const loans = await Loan.getAll();
        console.log(loans);
        res.json(loans);
    }

    async show(req, res) {
        try {
            const loan = await Loan.getOne(req.params.id);
            console.log(loan)
            res.json(loan);
        } catch (error) {
            console.log(error)
        }
        
    }

    async create(req, res) {
        await Loan.createNew(req.body, req.session.user._id);
        res.json('ok');
    }

    async editPut(req, res) {
        await Loan.updateOne(req.params.id, req.body);
        res.json('ok');
    }

    async editPatch(req, res) {
        await Loan.updateStatus(req.params.id, req.body);
        res.json({ msg: 'ok' })
    }
}

module.exports = new LoanController;