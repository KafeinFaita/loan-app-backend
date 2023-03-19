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
            const userPagePrivileges = ['users_allow_view', 'users_allow_edit']
            const isViewingOwnProfile = userPagePrivileges.includes(privilege) && req.params.id === req.session.user.userId;

            if (user.roles.find(role => role.privileges.includes(privilege)) || isViewingOwnProfile) {
                return next();
            }
            console.log('Unauthorized User')
            res.status(403).json({ error: "Unauthorized user" });
        }
    }

    // allow users to access data related to them
    // authorizeAccessOwnData(privilege) {
    //     return function(req, res, next) {
            
    //     }
    // }
}

module.exports = new Middleware;