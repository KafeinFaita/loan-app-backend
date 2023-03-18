class Middleware {
    // checks if user is logged in
    requireAuth(req, res, next) {
        if (req.session.user) {
            next();
        } else {
            res.status(401).json({ error: "You are not logged in." });
        }
    }

    // checks if user has the correct privilege to access certain routes
    authorizeUser(privilege) {
        return function(req, res, next) {
            const user = req.session.user;

            // boolean variable to check if user is requesting to view their own profile page
            const isViewingOwnProfile = privilege === 'users_allow_view' && req.params.id === req.session.user.userId;

            if (user.roles.find(role => role.privileges.includes(privilege)) || isViewingOwnProfile) {
                return next();
            }
            console.log('Unauthorized User')
            res.status(403).json({ error: "Unauthorized user" });
        }
        
    }
}

module.exports = new Middleware;