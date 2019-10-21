const c_maskapaipenerbangan = require('../controllers/c_maskapaipenerbangan');
const express = require("express");
const route = express.Router();

route.post('/', c_maskapaipenerbangan.create);

route.get('/', c_maskapaipenerbangan.getAll);

route.get('/:idmaskapaipenerbangan', c_maskapaipenerbangan.get);

route.delete('/:idmaskapaipenerbangan', c_maskapaipenerbangan.delete);

route.patch('/:idmaskapaipenerbangan', c_maskapaipenerbangan.update);

module.exports = route;