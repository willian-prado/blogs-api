const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');
const remove = require('./remove');
const update = require('./update');
const getBySearchTerm = require('./getBySearchTerm');

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  getBySearchTerm,
};