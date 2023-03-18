class Middleware {
    // checks if user is logged in
    requireAuth(req, res, next) {
        if (req.session.user) {
            next();
        } else {
            res.json({ error: "not allowed!" });
        }
    }

    // checks if user has the correct privilege to access certain routes
    authorizeUser(privilege) {
        return function(req, res, next) {
            const user = req.session.user;

            console.log(user.roles)

            if (user.roles.find(role => role.privileges.includes(privilege))) {
                console.log('Authorized User')
                return next();
            }
            console.log('Unauthorized User')
            res.status(403).json({ error: "Unauthorized user" });
        }
        
    }
}

module.exports = new Middleware;