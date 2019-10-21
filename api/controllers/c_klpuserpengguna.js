const model = require('../models');
const general = require('./_general_func');
const { m_klpuserpengguna } = model;

exports.create = (req, res) => {
    console.log('Function create');
    general.create(m_klpuserpengguna, req, res)
};

exports.getAll = (req, res) => {
    console.log('Function getAll');
    general.getAll(m_klpuserpengguna, req, res);
};

exports.get = (req, res) => {
    console.log('Function get');
    general.get(m_klpuserpengguna, req, res);
};

exports.delete = (req, res) => {
    console.log('Function delete');
    general.delete(m_klpuserpengguna, req, res);
};

exports.update = (req, res) => {
    console.log('Function update');
    const {idklpuserpengguna} = req.params;
    general.update(m_klpuserpengguna, req, res, idklpuserpengguna)
};