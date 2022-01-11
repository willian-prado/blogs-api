const express = require('express');

const router = express.Router({ mergeParams: true });
const create = require('./create');

router.post('/', create);

module.exports = router;