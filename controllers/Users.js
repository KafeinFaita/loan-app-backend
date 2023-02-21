const UserModel = require('../models/User');
const User = new UserModel;

class UserController {

    async index(req, res) {
        const users = await User.getAll();
        res.json(users);
    }

    async show(req, res) {
        const user = await User.getOne(req.params.id);
        console.log(user)
        res.json(user);
    }

    async create(req, res) {
        try {
            await User.createNew(req.body);
            res.json({msg: "ok"})
        } catch (error) {
            throw error;
        }
    }

    async edit(req, res) {
        try {
            await User.updateOne(req.params.id, req.body);
            res.json({ msg: "ok" });
        } catch (error) {
            throw error
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