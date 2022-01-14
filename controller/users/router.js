const express = require('express');

const router = express.Router({ mergeParams: true });
const { verifyToken } = require('../../middlewares/auth');
const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');
const remove = require('./remove');

router.post('/', create);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getById);
router.delete('/me', verifyToken, remove);

module.exports = router;