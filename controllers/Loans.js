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

    async create(req, res) {
        await Loan.createNew(req.body, req.session.user._id);
        res.json('ok')
    }
}

module.exports = new LoanController;