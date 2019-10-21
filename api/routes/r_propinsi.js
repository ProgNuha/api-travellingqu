const c_propinsi = require('../controllers/c_propinsi');
const express = require("express");
const route = express.Router();

route.get('/', c_propinsi.getAll);

route.get('/search', c_propinsi.search);

module.exports = route;