const c_user_pengelola = require('../controllers/c_user_pengelola');
const express = require("express");
const route = express.Router();

route.post('/signup', c_user_pengelola.create_user);

route.post('/login', c_user_pengelola.login);

route.get('/:iduserpengelola', c_user_pengelola.get);

// route.get('/forgot_passwd', c_user_pengelola.forgot_passwd);

// route.patch('/forgot_passwd', c_user_pengelola.update_passwd);

route.delete('/:iduserpengelola', c_user_pengelola.delete);

module.exports = route;