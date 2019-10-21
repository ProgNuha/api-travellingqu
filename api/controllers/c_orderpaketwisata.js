const model = require('../models');
const general = require('./_general_func');
const { t_orderpaketwisata } = model;

exports.create = (req, res) => {
    console.log('Function create');
    const { iduserpengguna, idmetodebayar,idpaketperjalanandetail,tglmulaiwisata,tglakhirwisata,jmlpax,totalbiayawisata} = req.body
    let new_orderpaketwisata = "rd";
    t_orderpaketwisata.findAll({
        attributes: ['idorderpaketwisata'],
        limit: 1,
        order: [['idorderpaketwisata','DESC']]
    })
    .then(last_record => {
        new_orderpaketwisata = general.create_id(last_record,new_orderpaketwisata);
        return t_orderpaketwisata.create({
            idorderpaketwisata: new_orderpaketwisata,
            iduserpengguna,
            idmetodebayar,
            idpaketperjalanandetail,
            tglmulaiwisata,
            tglakhirwisata,
            jmlpax,
            totalbiayawisata
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
    general.getAll(t_orderpaketwisata, req, res);
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(t_orderpaketwisata, req, res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(t_orderpaketwisata, req, res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const {idorderpaketwisata} = req.params;
    general.update(m_paketperjalanan, req, res, idorderpaketwisata);
};