const UserModel = require('../models/User');
const User = new UserModel;

class SessionController {
    async login(req, res) {
        try {
            const user = await User.login(req.body);
            req.session.user = user;
            console.log(user.roles)
            res.json(user);
        } catch (error) {
            throw error;  
        }
    }

    async authenticate(req, res) {
        if (req.session.user) {
            return res.json(req.session.user);
        }
        res.status(401).json({ error: "Not logged in." });
    }

    async logout (req, res) {
        req.session.user = null;
        res.json({ success: true });
    }
}

module.exports = new SessionController;