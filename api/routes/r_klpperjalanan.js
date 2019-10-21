const c_klpperjalanan = require('../controllers/c_klpperjalanan');
const express = require("express");
const route = express.Router();

route.post('/', c_klpperjalanan.create);
    
route.get('/:idklpperjalanan', c_klpperjalanan.get);

route.get('/', c_klpperjalanan.getAll);

route.delete('/:idklpperjalanan', c_klpperjalanan.delete);

route.patch('/:idklpperjalanan', c_klpperjalanan.update);

module.exports = route;