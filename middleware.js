class Middleware {
    requireAuth(req, res, next) {
        console.log(req.session.user, 'test')
        if (req.session.user) {
            next();
        } else {
            res.json({ error: "not allowed" });
        }
    }
}

module.exports = new Middleware;