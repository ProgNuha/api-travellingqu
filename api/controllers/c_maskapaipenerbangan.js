const model = require('../models');
const general = require('./_general_func');
const { m_maskapaipenerbangan } = model;

exports.create = (req, res) => {
    console.log('Function create');
    return general.create(m_maskapaipenerbangan,req,res);
};

exports.getAll = (req,res) => {
    console.log('Function getAll');
    general.getAll(m_maskapaipenerbangan, req, res);
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_maskapaipenerbangan, req, res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_maskapaipenerbangan, req, res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const {idmaskapaipenerbangan} = req.params;
    general.update(m_maskapaipenerbangan, req, res, idmaskapaipenerbangan)
};