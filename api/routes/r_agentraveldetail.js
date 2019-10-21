const c_agentraveldetail = require('../controllers/c_agentraveldetail');
const express = require("express");
const route = express.Router();

route.post('/', c_agentraveldetail.create);

route.delete('/:idagentraveldetail', c_agentraveldetail.delete);

route.patch('/:idagentraveldetail', c_agentraveldetail.update);

// route.delete('/', c_agentraveldetail.deleteAll);
    
route.get('/:idagentraveldetail', c_agentraveldetail.get);

route.get('/', c_agentraveldetail.getAll);

// route.delete('/:idagentraveldetail', c_agentraveldetail.delete);


module.exports = route;