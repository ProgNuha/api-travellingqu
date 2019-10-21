const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const model = require('../models');
const general = require('./_general_func');
const { m_kota, m_propinsi, m_negara  } = model;

exports.get = (req,res) => {
    console.log('Function getAll');
    let { idkota, idpropinsi, idnegara } = req.body;
    console.log('Function getAll_kota');
    m_kota.findAll({
        attributes:['nmkota'],
        where: {
            [Op.and]: [
                {idkota: req.body.idkota || idkota}, 
                {idpropinsi: req.body.idpropinsi || idpropinsi}, 
                {idnegara: req.body.idnegara || idnegara}
            ]
        }
    })
    .then(kota => {
        m_propinsi.findAll({
            attributes:['nmpropinsi', 'idnegara'],
            where: {
                idpropinsi: idpropinsi
            }
        })
        .then(propinsi => {
            m_negara.findAll({
                attributes: ['nmnegara'],
                where: {
                    idnegara: propinsi.idnegara || idnegara
                }
            })
            .then(negara => {
                if(kota.length === 0){
                    res.status(404).json({
                        message: 'No valid entry found'
                    });
                    console.log('else (query return null) no record found');
                } else {
                    const response = {
                        count: kota.length,
                        nama_negara: negara[0].nmnegara,
                        nama_propinsi: propinsi[0].nmpropinsi,
                        nama_kota: kota[0].nmkota
                    };
                    res.status(200).json(response);
                    console.log('get all records');
                }
            })
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.search_kota = (req,res) => {
    let search = req.body;
    search = search.toLowerCase();
    m_kota.findAll({
        attributes:['nmkota'],
        where: { 
            nmkota: {
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
                kota : result.map(kota => {
                    return {
                        nama_kota : kota.nmkota
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

exports.getAll_kota = (req,res) => {
    let { propinsi, negara } = req.body;
    console.log('Function getAll_kota');
    m_kota.findAll({
        attributes:['nmkota'],
        where: {
            [Op.and]: [
                {idpropinsi: req.body.propinsi || propinsi}, 
                {idnegara: req.body.negara || negara}
            ]
        }
    })
    .then(result => {
        console.log('result');
        m_propinsi.findAll({
            attributes:['nmpropinsi', 'idnegara'],
            where: {
                idpropinsi: propinsi
            }
        })
        .then(propinsi => {
            console.log('propinsi');
            m_negara.findAll({
                attributes: ['nmnegara'],
                where: {
                    idnegara: propinsi.idnegara || negara
                }
            })
            .then(negara => {
                console.log('negara');
                if(result.length === 0){
                    res.status(404).json({
                        message: 'No valid entry found'
                    });
                    console.log('else (query return null) no record found');
                } else {
                    const response = {
                        count: result.length,
                        nama_negara: negara[0].nmnegara,
                        nama_propinsi: propinsi[0].nmpropinsi,
                        kota: result.map(kota => {
                            return {
                                nama_kota: kota.nmkota
                            };
                        })
                    };
                    res.status(200).json(response);
                    console.log('get all records');
                }
            })
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};