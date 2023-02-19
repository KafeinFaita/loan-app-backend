const express = require('express');
const router = express.Router();

const Roles = require('./controllers/Roles');
const Users = require('./controllers/Users');

router.get('/roles', Roles.index);
router.post('/roles', Roles.create);
router.get('/roles/:id', Roles.show);
router.delete('/roles/:id', Roles.delete);

router.post('/users', Users.create);

module.exports = router;