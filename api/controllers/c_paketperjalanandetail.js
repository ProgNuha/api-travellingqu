const model = require('../models');
const general = require('./_general_func');
const { m_paketperjalanandetail } = model;

exports.create = (req, res) => {
    console.log('Function create_agenTravelDetail');
    // const { idpaketperjalanan } = req.body
    const { idpaketperjalanan,idmaskapaipenerbanganbrngkt,idmaskapaipenerbanganpulang,nmpaketperjalanandetail,durasi,minimumpax,hargaperpax} = req.body
    console.log("@" + idmaskapaipenerbanganbrngkt + nmpaketperjalanandetail);
    let new_idpaketperjalanandetail = "dpc";
    m_paketperjalanandetail.findAll({
        attributes: ['idpaketperjalanandetail'],
        order: [['idpaketperjalanandetail','DESC']]
    })
    .then(last_record => {
        new_idpaketperjalanandetail = general.create_id(last_record,new_idpaketperjalanandetail);
        return m_paketperjalanandetail.create({
            idpaketperjalanandetail: new_idpaketperjalanandetail,
            idpaketperjalanan,
            idmaskapaipenerbanganbrngkt,
            idmaskapaipenerbanganpulang,
            nmpaketperjalanandetail,
            durasi,
            minimumpax,
            hargaperpax
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
    
};

exports.getAll = (req,res) => {
    console.log('Function getAll');
    general.getAll(m_paketperjalanandetail, req, res)
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_paketperjalanandetail, req, res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_paketperjalanandetail, req, res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const {idpaketperjalanandetail} = req.params;
    general.update(m_paketperjalanandetail, req, res, idpaketperjalanandetail)
};