const model = require('../models');
const general = require('./_general_func');
const { m_hotel} = model;

exports.create = (req, res) => {
    console.log('Function create_user');
    const { idkota,idpropinsi,idnegara,nmhotel,bintang,notelp,nmpic } = req.body
    let new_idhotel = "htl";
    m_hotel.findAll({
        attributes:['idhotel'],
        limit: 1,
        order:[['idhotel', 'DESC']]
    })
    .then(last_record => {
        new_idhotel = general.create_id(last_record,new_idhotel);
        console.log('concat number and inisial user was success, id = '+ new_idhotel +', insert to database');
        return m_hotel.create({
            idhotel: new_idhotel,
            idkota,
            idpropinsi,
            idnegara,
            nmhotel,
            bintang,
            notelp,
            nmpic        
        })
        .then(result => res.status(201).send({
            success: true,
            message: 'Hotel successfully added',
            result
        }))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    })
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_hotel,req,res);
};

exports.getAll = (req,res) => {
    console.log('Function getALl');
    general.getAll(m_hotel,req,res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_hotel,req,res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const {idhotel} = req.params;
    general.update(m_hotel,req,res,idhotel);
};

