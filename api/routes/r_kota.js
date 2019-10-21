const c_kota = require('../controllers/c_kota');
const express = require("express");
const route = express.Router();

route.get('/gets', c_kota.getAll_kota);

route.get('/', c_kota.get);
    

module.exports = route;