const express = require('express');
const router = express.Router();

const Middleware = require('./middleware')
const Sessions = require('./controllers/Sessions');
const Roles = require('./controllers/Roles');
const Users = require('./controllers/Users');
const LoanTypes = require('./controllers/LoanTypes');

router.get('/auth', Sessions.authenticate);
router.post('/', Sessions.login);
router.delete('/auth', Sessions.logout);

router.get('/roles', Roles.index);
router.post('/roles', Roles.create);
router.get('/roles/:id', Roles.show);
router.delete('/roles/:id', Roles.delete);

router.get('/users', Middleware.requireAuth, Users.index);
router.get('/users/:id', Users.show);
router.post('/users', Users.create);
router.put('/users/:id', Users.edit);
router.delete('/users/:id', Users.delete);

router.get('/loan-types', LoanTypes.index);
router.get('/loan-types/:id', LoanTypes.show);
router.post('/loan-types', LoanTypes.create);
router.put('/loan-types/:id', LoanTypes.edit);
router.delete('/loan-types/:id', LoanTypes.delete);

module.exports = router;