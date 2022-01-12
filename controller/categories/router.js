const express = require('express');

const router = express.Router({ mergeParams: true });
const { verifyToken } = require('../../middlewares/auth');
const create = require('./create');
const getAll = require('./getAll');

router.post('/', verifyToken, create);
router.get('/', verifyToken, getAll);

module.exports = router;