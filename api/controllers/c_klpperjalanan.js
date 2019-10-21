const model = require('../models');
const general = require('./_general_func');
const { m_klpperjalanan } = model;

exports.create = (req, res) => {
    console.log('Function create_klpPerjalanan');
    return general.create(m_klpperjalanan,req,res);
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_klpperjalanan, req, res);
};

exports.getAll = (req,res) => {
    console.log('Function getAll');
    general.getAll(m_klpperjalanan,req,res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_klpperjalanan, req, res);

};

exports.update = (req,res) => {
    console.log('Function update_klpPerjalanan');
    const id = req.params.idklpperjalanan;
    general.update(m_klpperjalanan,req,res,id)
};