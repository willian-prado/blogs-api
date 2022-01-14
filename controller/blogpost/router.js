const express = require('express');

const router = express.Router({ mergeParams: true });
const { verifyToken } = require('../../middlewares/auth');
const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');
const update = require('./update');
const remove = require('./remove');

router.post('/', verifyToken, create);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getById);
router.put('/:id', verifyToken, update);
router.delete('/:id', verifyToken, remove);

module.exports = router;