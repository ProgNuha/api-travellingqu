const model = require('../models');
const general = require('./_general_func');
const { m_fotodetaillokasi } = model;

exports.create = (req,res) => {
    console.log('Function create Paket Perjalanan');
    const { idtripwisataperhari } = req.body
    const fotolokasi = req.file.path
    return m_fotodetaillokasi
        .create({
            idtripwisataperhari,
            fotolokasi
        })
        .then(data => res.status(201).json({
            success: true,
            message: 'Foto Detail Lokasi successfully added',
            data
        }))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.getAll = (req,res) => {
    console.log('Function getAll');
    general.getAll(m_fotodetaillokasi, req, res);
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_fotodetaillokasi, req, res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_fotodetaillokasi, req, res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const {idfotolokasi} = req.params;
    general.update1(m_fotodetaillokasi, req, res, idfotolokasi)
};