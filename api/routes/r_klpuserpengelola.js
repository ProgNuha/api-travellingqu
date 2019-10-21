const c_klpuserpengelola = require('../controllers/c_klpuserpengelola');
const express = require("express");
const route = express.Router();

route.post('/', c_klpuserpengelola.create);

route.get('/', c_klpuserpengelola.getAll); 

route.get('/:idklpuserpengelola', c_klpuserpengelola.get); 

route.delete('/:idklpuserpengelola', c_klpuserpengelola.delete); 

route.patch('/:idklpuserpengelola', c_klpuserpengelola.update); 


module.exports = route;

