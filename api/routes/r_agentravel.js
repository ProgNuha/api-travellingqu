const c_agentravel = require('../controllers/c_agentravel');
const multer = require('multer');
const express = require("express");
const route = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/agen_travel');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().getTime() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'|| file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


route.post('/',upload.single('fotoagentravel'), c_agentravel.create_agenTravel);

route.get('/gets', c_agentravel.getAll);

route.get('/get/:idagentravel', c_agentravel.get);

// route.get('/ea', c_agentravel.search);

route.delete('/', c_agentravel.deleteAll);

route.delete('/:idagentravel', c_agentravel.delete);

route.patch('/:idagentravel', c_agentravel.update);

route.get('/search', c_agentravel.search);

module.exports = route;