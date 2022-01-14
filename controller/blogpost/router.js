const express = require('express');

const router = express.Router({ mergeParams: true });
const { verifyToken } = require('../../middlewares/auth');
const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');

router.post('/', verifyToken, create);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getById);

module.exports = router;