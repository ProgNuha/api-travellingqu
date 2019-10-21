const c_user_pengguna = require('../controllers/c_user_pengguna');
const express = require("express");
const route = express.Router();

route.post('/signup', c_user_pengguna.create_user); 

route.post('/login', c_user_pengguna.login); 

route.get('/get/:iduserpengguna', c_user_pengguna.get);

route.get('/forgot_passwd', c_user_pengguna.forgot_passwd);

route.patch('/forgot_passwd', c_user_pengguna.update_passwd);

route.patch('/update/:iduserpengguna', c_user_pengguna.update);

route.delete('/:iduserpengguna',c_user_pengguna.delete);

module.exports = route;


