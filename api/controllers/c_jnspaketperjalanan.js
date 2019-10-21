const model = require('../models');
const general = require('./_general_func');
const { m_jnspaketperjalanan } = model;

exports.create = (req,res) => {
    console.log('Function create_jnsPaket');
    general.create(m_jnspaketperjalanan,req,res);
};

exports.getAll = (req,res) => {
    console.log('Function getAll_jnsPaket');
    general.getAll(m_jnspaketperjalanan,req,res);
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_jnspaketperjalanan, req, res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_jnspaketperjalanan, req, res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const { idjnspaketperjalanan } = req.params
    general.update1(m_jnspaketperjalanan,req,res,idjnspaketperjalanan)
};