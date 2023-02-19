const UserModel = require('../models/User');
const User = new UserModel;

class UserController {
    async create(req, res) {
        try {
            await User.createNew(req.body);
            res.json({msg: "ok"})
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserController;