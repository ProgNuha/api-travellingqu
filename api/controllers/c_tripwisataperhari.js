const model = require('../models');
const general = require('./_general_func');
const { m_tripwisataperhari, m_paketperjalanandetail} = model;

exports.create = (req,res) => {
    console.log('Function create Paket Perjalanan');
    const { idpaketperjalanandetail, harike, idnegara, idpropinsi, idkota, idhotel, idlokasiwisata } = req.body
    const fotolokasiwisata = req.file.path
    return m_tripwisataperhari
        .create({
            idpaketperjalanandetail,
            harike, 
            idnegara, 
            idpropinsi, 
            idkota, 
            idhotel, 
            idlokasiwisata,
            fotolokasiwisata
        })
        .then(data => res.status(201).json({
            success: true,
            message: 'Trip wisata per hari successfully added',
            data
        }))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.getAll = (req,res) => {
    console.log('Function getAll');
    general.getAll(m_tripwisataperhari, req, res);
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_tripwisataperhari, req, res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_tripwisataperhari, req, res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const {idtripwisataperhari} = req.params;
    general.update(m_tripwisataperhari, req, res, idtripwisataperhari)
};

exports.getHariKe = (id_) => {
    model.findOne({
        where: {
            [Op.or] : [
                id_
            ]
        }
    }).then(getHari => {
        m_paketperjalanandetail.findAll({
            limit: 1,
            attributes:['durasi'],
            where: {
                idpaketperjalanandetail: m_tripwisataperhari.idpaketperjalanandetail
            }
        })
        .then(result => {
            let obj = [];
            let i = 1;
            let j = 0;
            while (i<=result.durasi){
                obj[j] = i;
                i++;
                j++;
            }
            return obj;
        })
    });

    // m_tripwisataperhari.beforeCreate(function(model){
    //     m_paketperjalanandetail.findAll({
    //       limit: 1,
    //       attributes:['durasi'],
    //       where: {
    //         idpaketperjalanandetail: model.idpaketperjalanandetail
    //       }
    //     })
    //     .then(result => {
    //       if(model.harike > result.durasi){
    //         throw console.error("Sorry, harike and durasi didn't match");
    //       }
    //     })
    //   });
    
};