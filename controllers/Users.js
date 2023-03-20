const UserModel = require('../models/User');
const User = new UserModel;

class UserController {

    async index(req, res) {
        console.log(req.session.user)
        const users = await User.getAll();
        res.json(users);
    }

    async show(req, res) {
        const user = await User.getOne(req.params.id);
        res.json(user);
    }

    async create(req, res) {
        try {
            const user = await User.createNew(req.body);

            console.log(user)

            if(user.error && user.error === "Username is already taken") {
                return res.status(409).json(user)
            }

            res.json({msg: "ok"})
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Something went wrong. Please try refreshing the page or contact the administrator if error persists." })
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