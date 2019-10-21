const model = require('../models');
const general = require('./_general_func');
const { m_kategoriwisata } = model;

exports.create = (req,res) => {
    console.log('Function create_kWisata');
    general.create(m_kategoriwisata,req,res);
};

exports.getAll = (req,res) => {
    console.log('Function getAll_kWisata');
    general.getAll(m_kategoriwisata,req,res);
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_kategoriwisata, req, res);
};

exports.delete =(req,res) => {
    console.log('Function dellete');
    general.delete(m_kategoriwisata, req, res);
};

exports.update = (req,res) => {
    console.log('Function update_kWisata');
    const {idkategoriwisata} = req.params;
    general.update(m_kategoriwisata,req,res,idkategoriwisata)
};