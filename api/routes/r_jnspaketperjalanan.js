const c_jnspaketperjalanan = require('../controllers/c_jnspaketperjalanan');
const express = require("express");
const route = express.Router();

route.post('/', c_jnspaketperjalanan.create);

route.get('/', c_jnspaketperjalanan.getAll);

route.get('/:idjnspaketperjalanan', c_jnspaketperjalanan.get);

route.delete('/:idjnspaketperjalanan', c_jnspaketperjalanan.delete);

route.patch('/:idjnspaketperjalanan', c_jnspaketperjalanan.update);

module.exports = route;