const express = require('express');

const router = express.Router({ mergeParams: true });
const create = require('./create');
const { verifyToken } = require('../../middlewares/auth');

router.post('/', verifyToken, create);

module.exports = router;