const c_metodebayar = require('../controllers/c_metodebayar');
const express = require("express");
const route = express.Router();

route.get('/', c_metodebayar.getAll);

route.get('/:idmetodebayar', c_metodebayar.get);

route.delete('/:idmetodebayar', c_metodebayar.delete);

route.patch('/:idmetodebayar', c_metodebayar.update);


module.exports = route;