const UserModel = require('../models/User');
const User = new UserModel;

class SessionController {
    async login(req, res) {
        try {
            const user = await User.login(req.body);
            req.session.user = user;
            req.session.test = 1;
            console.log(req.session)
            res.json(user);
        } catch (error) {
            throw error;  
        }
    }

    async authenticate(req, res) {
        console.log(req.session)
        try {
            if (req.session.user) {
                return res.json(req.session.user);
            }
            res.status(404).json({ error: "User not logged in." })
        } catch (error) {
            throw error;  
        }
    }

    async logout (req, res) {
        req.session.user = null;
        res.json({ success: true });
    }
}

module.exports = new SessionController;