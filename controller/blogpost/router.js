const express = require('express');

const router = express.Router({ mergeParams: true });
const { verifyToken } = require('../../middlewares/auth');
const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');
const update = require('./update');

router.post('/', verifyToken, create);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getById);
router.put('/:id', verifyToken, update);

module.exports = router;