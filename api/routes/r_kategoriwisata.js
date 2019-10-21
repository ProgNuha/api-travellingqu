const c_kategoriwisata = require('../controllers/c_kategoriwisata')
const express = require("express");
const route = express.Router();

route.post('/', c_kategoriwisata.create);

route.get('/', c_kategoriwisata.getAll);

route.get('/:idkategoriwisata', c_kategoriwisata.get);

route.delete('/:idkategoriwisata', c_kategoriwisata.delete);

route.patch('/:idkategoriwisata', c_kategoriwisata.update);
    

module.exports = route;