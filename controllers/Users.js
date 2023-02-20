const UserModel = require('../models/User');
const User = new UserModel;

class UserController {

    async index(req, res) {
        const users = await User.getAll();
        console.log(users[0].roles)
        res.json(users);
    }

    async create(req, res) {
        try {
            await User.createNew(req.body);
            res.json({msg: "ok"})
        } catch (error) {
            throw error;
        }
    }

    async delete(req, res) {
        try {
            await User.deleteOne(req.params.id)
            res.json({ deleted: true })
        } catch (error) {
            throw error
        }
    }
}

module.exports = new UserController;