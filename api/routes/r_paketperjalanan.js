const c_paketperjalanan = require('../controllers/c_paketperjalanan');
const express = require("express");
const route = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/paket_perjalanan');
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

route.post('/', upload.single('fotopaketperjalanan'), c_paketperjalanan.create);

route.get('/',c_paketperjalanan.getAll);

route.get('/:idpaketperjalanan', c_paketperjalanan.get);

route.delete('/:idpaketperjalanan', c_paketperjalanan.delete);

route.patch('/:idpaketperjalanan', c_paketperjalanan.update);

module.exports = route;