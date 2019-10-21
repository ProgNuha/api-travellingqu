const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const model = require('../models');
const general = require('./_general_func');
const { m_propinsi, m_negara } = model;

exports.getAll = (req,res) =>  {
    let { negara } = req.body;
    console.log('Function getAll_propinsi');
    m_propinsi.findAll({
        attributes:['nmpropinsi','idnegara'],
        where: { 
            idnegara: req.body.negara || negara
        }
    })
    .then(result => {
        m_negara.findAll({
            attributes:['nmnegara'],
            where: {
                idnegara: result[0].idnegara
            }
        })
        .then(negara => {
            if(result.length === 0){
                res.status(404).json({
                    message: 'No valid entry found'
                });
                console.log('else (query return null) no record found');
            } else {
                const response = {
                    count: result.length,
                    nama_negara: negara[0].nmnegara,
                    propinsi: result.map(propinsi => {
                        return {
                            nama_propinsi: propinsi.nmpropinsi
                        };
                    })
                };
                res.status(200).json(response);
                console.log('get all records');
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.search = (req,res) =>  {
    let search = req.body;
    search = search.toLowerCase();
    m_negara.findAll({
        attributes:['nmpropinsi'],
        where: { 
            nmpropinsi: {
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
                propinsi : result.map(propinsi => {
                    return {
                        nama_propinsi : propinsi.nmpropinsi
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