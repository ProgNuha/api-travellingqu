const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const model = require('../models');
const general = require('./_general_func');
const { m_negara } = model;

exports.getAll = (req,res) => {
    console.log('Function getAll');
    general.getAll(m_negara, req, res);
};

exports.getAll_negara = (req,res) =>  {
    console.log('Function getAll_negara');
    m_negara.findAll()
    .then(result => {
        if(result.length === 0){
            res.status(404).json({
                message: 'No valid entry found'
            });
            console.log('else (query return null) no record found');
        } else {
            const response = {
                count: result.length,
                negara: result.map(negara => {
                    return {
                        nama_negara: negara.nmnegara
                    };
                })
            };
            res.status(200).json(response);
            console.log('get all records');
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.search_negara = (req,res) =>  {
    let search = req.body;
    search = search.toLowerCase();
    m_negara.findAll({
        attributes:['nmnegara'],
        where: { 
            nmnegara: {
                [Op.like]: '%'+ search +'%'
            }
        }
    })
    .then(result => {
        if(result === null){
            res.status(404).json({
                message: 'No valid entry found',
            })
        } else {
            const response = {
                negara : result.map(negara => {
                    return {
                        nama_negara : negara.nmnegara
                    }
                })
            };
            res.status(200).json(response);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};