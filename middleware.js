class Middleware {
    requireAuth(req, res, next) {
        if (req.session.user) {
            next();
        } else {
            res.json({ error: "not allowed" });
        }
    }
}

module.exports = new Middleware;