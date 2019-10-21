const c_hotel = require('../controllers/c_hotel');
const express = require("express");
const route = express.Router();

route.post('/', c_hotel.create);

route.get('/:idhotel', c_hotel.get);

route.get('/', c_hotel.getAll);

route.delete('/:idhotel', c_hotel.delete);

route.patch('/:idhotel', c_hotel.update);


module.exports = route;