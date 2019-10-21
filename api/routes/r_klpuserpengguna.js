const c_klpuserpengguna = require('../controllers/c_klpuserpengguna');
const express = require("express");
const route = express.Router();

route.post('/', c_klpuserpengguna.create); 

route.get('/', c_klpuserpengguna.getAll);

route.get('/:idklpuserpengguna', c_klpuserpengguna.get); 

route.delete('/:idklpuserpengguna', c_klpuserpengguna.delete);

route.patch('/:idklpuserpengguna', c_klpuserpengguna.update); 



module.exports = route;