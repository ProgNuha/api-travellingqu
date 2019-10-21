const model = require('../models');
const general = require('./_general_func');
const { m_lokasiwisata } = model;

exports.create = (req, res) => {
    console.log('Function create');
    return general.create1(m_lokasiwisata,req,res);
};

exports.getAll = (req,res) => {
    console.log('Function getAll');
    general.getAll(m_lokasiwisata, req, res);
}

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_lokasiwisata, req, res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_lokasiwisata, req, res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const {idlokasiwisata} = req.params;
    general.update1(m_lokasiwisata, req, res, idlokasiwisata)
};