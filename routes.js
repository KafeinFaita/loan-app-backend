const express = require('express');
const router = express.Router();

const Roles = require('./controllers/Roles');
const Users = require('./controllers/Users');

router.get('/roles', Roles.index);
router.post('/roles', Roles.create);
router.get('/roles/:id', Roles.show);
router.delete('/roles/:id', Roles.delete);

router.get('/users', Users.index);
router.get('/users/:id', Users.show);
router.post('/users', Users.create);
router.put('/users/:id', Users.edit);
router.delete('/users/:id', Users.delete);

module.exports = router;