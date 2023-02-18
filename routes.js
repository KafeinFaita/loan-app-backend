const express = require('express');
const router = express.Router();

const Roles = require('./controllers/Roles');

router.get('/roles', Roles.index);
router.post('/roles', Roles.create);
router.get('/roles/:id', Roles.show);
router.delete('/roles/:id', Roles.delete);

module.exports = router;