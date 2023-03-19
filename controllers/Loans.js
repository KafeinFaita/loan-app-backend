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
            const user = req.session.user;
            const loan = await Loan.getOne(req.params.id);
            console.log(loan)

            // respond with an error if user doesn't have privilege to view other member's loans
            if (!user.roles.find(role => role.privileges.includes('loans_allow_view_members')) && loan.user.userId !== req.session.user.userId) {
                console.log('inside 403')
                return res.status(403).json({ error: "Unauthorized User" })
            }

            res.status(200).json(loan);
        } catch (error) {
            console.log('inside catch')
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