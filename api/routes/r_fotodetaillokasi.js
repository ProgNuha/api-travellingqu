const c_fotodetaillokasi = require('../controllers/c_fotodetaillokasi');
const express = require("express");
const route = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/detail_lokasi');
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

route.post('/', upload.single('fotolokasi'), c_fotodetaillokasi.create);

route.get('/',c_fotodetaillokasi.getAll);

route.get('/:idfotolokasi', c_fotodetaillokasi.get);

route.delete('/:idfotolokasi', c_fotodetaillokasi.delete);

route.patch('/:idfotolokasi', c_fotodetaillokasi.update);

module.exports = route;