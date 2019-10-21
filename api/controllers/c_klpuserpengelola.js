const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const model = require('../models');
const general = require('./_general_func');
const { m_klpuserpengelola, m_klpuserpengguna } = model;

exports.create = (req, res) => {
    console.log('Function create');
    general.create(m_klpuserpengelola,req,res)
};

exports.getAll = (req, res) => {
    console.log('Function getAll');
    general.getAll(m_klpuserpengelola,req,res);
};

exports.get = (req, res) => {
    console.log('Function get');
    general.get(m_klpuserpengelola,req,res);
};

exports.delete = (req, res) => {
    console.log('Function delete');
    general.delete(m_klpuserpengelola,req,res);
};

exports.update = (req, res) => {
    console.log('Function update');
    const { idklpuserpengelola } = req.params
    general.update(m_klpuserpengelola,req,res,idklpuserpengelola);
};