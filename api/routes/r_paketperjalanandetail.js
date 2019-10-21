const c_paketperjalanandetail = require('../controllers/c_paketperjalanandetail');
const express = require("express");
const route = express.Router();

route.post('/', c_paketperjalanandetail.create);

route.get('/', c_paketperjalanandetail.getAll);

route.get('/:idpaketperjalanandetail', c_paketperjalanandetail.get);

route.delete('/:idpaketperjalanandetail', c_paketperjalanandetail.delete);

route.patch('/:idpaketperjalanandetail', c_paketperjalanandetail.update);

module.exports = route;