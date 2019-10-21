const c_tripwisataperhari = require('../controllers/c_tripwisataperhari');
const express = require("express");
const route = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/lokasi_wisata');
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

route.post('/', upload.single('fotolokasiwisata'), c_tripwisataperhari.create);

route.get('/',c_tripwisataperhari.getAll);

route.get('/:idtripwisataperhari', c_tripwisataperhari.get);

route.delete('/:idtripwisataperhari', c_tripwisataperhari.delete);

route.patch('/:idtripwisataperhari', c_tripwisataperhari.update);

module.exports = route;