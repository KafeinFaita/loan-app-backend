const express = require('express');
const router = express.Router();

const Roles = require('./controllers/Roles');

router.get('/roles', Roles.index);
router.post('/roles', Roles.create);

module.exports = router;