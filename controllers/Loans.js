const LoanModel = require('../models/Loan');
const Loan = new LoanModel;

class LoanController {
    async index(req, res) {
        console.log("userId: " + req.session.user._id)
        const loans = await Loan.get(req.session.user._id);
        res.json(loans);
    }

    async indexMember(req, res) {
        const loans = await Loan.getAll();
        console.log('test')
        console.log(loans);
        res.json(loans);
    }

    async show(req, res) {
        try {
            const loan = await Loan.getOne(req.params.id);
            console.log(req.session.user)
            console.log(loan)
            res.json(loan);
        } catch (error) {
            res.status(404).json({ error: 'Loan not found!' });
        }
        
    }

    async create(req, res) {
        await Loan.createNew(req.body, req.session.user._id);
        res.json('ok');
    }

    // member loan edit
    async editPut(req, res) {
        await Loan.updateOne(req.params.id, req.body);
        res.json('ok');
    }

    // admin status update
    async editPatch(req, res) {
        await Loan.updateStatus(req.params.id, req.body);
        res.json({ msg: 'ok' })
    }
}

module.exports = new LoanController;