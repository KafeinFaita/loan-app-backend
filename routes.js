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

router.get('/roles', Middleware.requireAuth, Middleware.authorizeUser('roles_allow_view'), Roles.index);
router.post('/roles', Middleware.requireAuth, Middleware.authorizeUser('roles_allow_add'), Roles.create);
router.get('/roles/:id', Middleware.requireAuth, Middleware.authorizeUser('roles_allow_view'), Roles.show);
router.put('/roles/:id', Middleware.requireAuth, Middleware.authorizeUser('roles_allow_edit'), Roles.edit);
router.delete('/roles/:id', Middleware.requireAuth, Middleware.authorizeUser('roles_allow_delete'), Roles.delete);

router.get('/users', Middleware.requireAuth, Middleware.authorizeUser('users_allow_view'), Users.index);
router.get('/users/:id', Middleware.requireAuth, Middleware.authorizeUser('users_allow_view'), Users.show);
router.post('/users', Middleware.requireAuth, Middleware.authorizeUser('users_allow_add'), Users.create);
router.put('/users/:id', Middleware.requireAuth, Middleware.authorizeUser('users_allow_edit'), Users.edit);
router.delete('/users/:id', Middleware.requireAuth, Middleware.authorizeUser('users_allow_delete'), Users.delete);

router.get('/loans', Middleware.requireAuth, Middleware.authorizeUser('loans_allow_view'), Loans.index);
router.get('/loans/:id', Middleware.requireAuth, Middleware.authorizeUser('loans_allow_view'), Loans.show);
router.post('/loans', Middleware.requireAuth, Middleware.authorizeUser('loans_allow_add'), Loans.create);
router.patch('/loans/:id', Middleware.requireAuth, Middleware.authorizeUser('loans_allow_update_status'), Loans.editPatch);
router.put('/loans/:id', Middleware.requireAuth, Middleware.authorizeUser('loans_allow_edit'), Loans.editPut);

router.get('/loan-types', Middleware.requireAuth, Middleware.authorizeUser('loantypes_allow_view'), LoanTypes.index);
router.get('/loan-types/:id', Middleware.requireAuth, Middleware.authorizeUser('loantypes_allow_view'), LoanTypes.show);
router.post('/loan-types', Middleware.requireAuth, Middleware.authorizeUser('loantypes_allow_add'), LoanTypes.create);
router.put('/loan-types/:id', Middleware.requireAuth, Middleware.authorizeUser('loantypes_allow_edit'), LoanTypes.edit);
router.delete('/loan-types/:id', Middleware.requireAuth, Middleware.authorizeUser('loantypes_allow_delete'), LoanTypes.delete);

router.get('/loan-grid', LoanGrids.index);
router.post('/loan-grid', LoanGrids.create);
router.delete('/loan-grid/:id', LoanGrids.delete);

module.exports = router;