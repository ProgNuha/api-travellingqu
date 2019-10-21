const c_orderpaketwisata = require('../controllers/c_orderpaketwisata');
const express = require("express");
const route = express.Router();

route.post('/', c_orderpaketwisata.create);

route.get('/', c_orderpaketwisata.getAll);

route.get('/:idorderpaketwisata', c_orderpaketwisata.get);

route.delete('/:idorderpaketwisata', c_orderpaketwisata.delete);

route.patch('/:idorderpaketwisata', c_orderpaketwisata.update);


module.exports = route;