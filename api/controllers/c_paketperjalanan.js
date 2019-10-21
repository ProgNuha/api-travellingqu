const model = require('../models');
const general = require('./_general_func');
const { m_paketperjalanan } = model;

exports.create = (req,res) => {
    console.log('Function create Paket Perjalanan');
    const { idpaketperjalanan, idjnspaketperjalanan, idlokasiwisata, nmpaketperjalanan, isaktif } = req.body
    const fotopaketperjalanan = req.file.path
    m_paketperjalanan.findOne({
        attributes:['idpaketperjalanan'],
        where: {
            idpaketperjalanan: req.body.idpaketperjalanan || idpaketperjalanan
        }
    })
    .then(pack => {
        console.log('query');
        if(pack !== null){
            console.log('if (query return not null)');
            return res.status(401).send({
                message: 'ID has been used'
            });
        } else {
            console.log('else (query return null), insert agen travel');
            return m_paketperjalanan.create({
                idpaketperjalanan, 
                idjnspaketperjalanan, 
                idlokasiwisata,
                nmpaketperjalanan, 
                isaktif,
                fotopaketperjalanan
            })
            .then(data => res.status(201).json({
                success: true,
                message: 'Paket Perjalanan successfully added',
                data
            }))
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        }
    })
};

exports.getAll = (req,res) => {
    console.log('Function getAll');
    general.getAll(m_paketperjalanan, req, res);
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_paketperjalanan, req, res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_paketperjalanan, req, res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const {idpaketperjalanan} = req.params;
    general.update(m_paketperjalanan, req, res, idpaketperjalanan)
};
