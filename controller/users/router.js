const express = require('express');

const router = express.Router({ mergeParams: true });
const { verifyToken } = require('../../middlewares/auth');
const create = require('./create');
const getAll = require('./getAll');

router.post('/', create);
router.get('/', verifyToken, getAll);

module.exports = router;