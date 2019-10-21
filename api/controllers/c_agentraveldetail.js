const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const model = require('../models');
const general = require('./_general_func');
const { m_agentravel, m_agentraveldetail, m_kota, m_propinsi, m_negara  } = model;

exports.create = (req, res) => {
    console.log('Function create_agenTravelDetail');
    const { idagentravel,idpaketperjalanan,idkota,idpropinsi,idnegara } = req.body
    m_agentravel.findOne({
        attributes:['inisialagentravel'],
        where: {
            idagentravel: req.body.idagentravel || idagentravel
        }
    })
    .then(agenTravelD => {
        let new_idagentraveldetail = agenTravelD.inisialagentravel;
        m_agentraveldetail.findAll({
            attributes: ['idagentraveldetail'],
            where: {idagentravel: req.body.idagentravel || idagentravel},
            order: [['idagentraveldetail','DESC']]
        })
        .then(last_record => {
            new_idagentraveldetail = general.create_id(last_record,new_idagentraveldetail);
            return m_agentraveldetail.create({
                idagentraveldetail: new_idagentraveldetail,
                idagentravel,
                idpaketperjalanan,
                idkota,
                idpropinsi,
                idnegara
            })
            .then(created => res.status(201).json({
                success: true,
                message: 'successfully created a new record to database',
                inserted: created
            }))
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        })
    })
};

exports.getAll = (req, res) => {
    console.log('Function getAll_agenTravelDetail');
    general.getAll(m_agentraveldetail,req,res);
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_agentraveldetail,req,res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_agentraveldetail,req,res);
};

exports.deleteAll = (req,res) => {
    console.log('Function deleteAll');
    general.deleteAll(m_agentraveldetail,req,res)
};

exports.update = (req,res) => {
    console.log('Function delete');
    const {idagentraveldetail} = req.params;
    general.update(m_agentraveldetail,req,res,idagentraveldetail);
};