const express = require('express');
const router = express.Router();

const Middleware = require('./middleware')
const Sessions = require('./controllers/Sessions');
const Roles = require('./controllers/Roles');
const Users = require('./controllers/Users');
const Loans = require('./controllers/Loans');
const LoanTypes = require('./controllers/LoanTypes');
const LoanGrids = require('./controllers/LoanGrids');

router.get('/auth', Sessions.authenticate);
router.post('/', Sessions.login);
router.delete('/auth', Sessions.logout);

router.get('/roles', Roles.index);
router.post('/roles', Roles.create);
router.get('/roles/:id', Roles.show);
router.put('/roles/:id', Roles.edit);
router.delete('/roles/:id', Roles.delete);

router.get('/users', Middleware.requireAuth, Users.index);
router.get('/users/:id', Users.show);
router.post('/users', Users.create);
router.put('/users/:id', Users.edit);
router.delete('/users/:id', Users.delete);

router.get('/loans', Loans.index);
router.get('/loans/:id', Loans.show);
router.post('/loans', Loans.create);
router.patch('/loans/:id', Loans.editPatch);
router.put('/loans/:id', Loans.editPut);

router.get('/loan-types', LoanTypes.index);
router.get('/loan-types/:id', LoanTypes.show);
router.post('/loan-types', LoanTypes.create);
router.put('/loan-types/:id', LoanTypes.edit);
router.delete('/loan-types/:id', LoanTypes.delete);

router.get('/loan-grid', LoanGrids.index);
router.post('/loan-grid', LoanGrids.create);
router.delete('/loan-grid/:id', LoanGrids.delete);

module.exports = router;