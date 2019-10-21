const c_lokasiwisata = require('../controllers/c_lokasiwisata');
const express = require("express");
const route = express.Router();

route.post('/', c_lokasiwisata.create);

route.get('/', c_lokasiwisata.getAll);

route.get('/:idlokasiwisata', c_lokasiwisata.get);

route.delete('/:idlokasiwisata', c_lokasiwisata.delete);

route.patch('/:idlokasiwisata', c_lokasiwisata.update);

module.exports = route;