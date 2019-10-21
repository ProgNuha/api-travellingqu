const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const model = require('../models');
const general = require('./_general_func');
const c_agentravel = require('./c_agentravel');
const { m_agentravel} = model;

exports.create_agenTravel = (req, res) => {
    console.log('Function create_agenTravel');
    const { nmagentravel,inisialagentravel } = req.body
    const fotoagentravel = req.file.path
    m_agentravel.findOne({
        attributes:['inisialagentravel'],
        where: {
            inisialagentravel: req.body.inisialagentravel || inisialagentravel
        }
    })
    .then(user => {
        console.log('query');
        if(user !== null){
            console.log('if (query return not null)');
            return res.status(401).send({
                message: 'Inisial has been used'
            });
        } else {
            console.log('else (query return null), insert agen travel');
            return m_agentravel
                .create({
                    nmagentravel,
                    inisialagentravel,
                    fotoagentravel
                })
                .then(userData => res.status(201).send({
                    success: true,
                    message: 'Agen Travel successfully added',
                    userData
                })
            )
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        }})
};

exports.search_agenTravel = (req,res) => {
    let {term} = req.body;
    console.log(req.body);
    console.log(term);
    term = term.toLowerCase();
    m_agentravel.findAll({
        attributes:['nmagentravel'],
        where: { 
                nmagentravel: {
                [Op.like]: '%'+ term +'%'
            }
        }
    })
    .then(result => {
        if(result === null){
            res.status(404).json({
                message: 'Agen travel not found',
            })
        } else {
            const response = {
                agentravel : result.map(agen => {
                    return {
                        agen_travel : agen.nmagentravel
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

exports.getAll = (req, res) => {
    console.log('Function getAll');
    general.getAll(m_agentravel, req, res);
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_agentravel, req, res);
};

exports.search = (req,res) => {
    console.log('Function search');
    const where_statement = c_agentravel.where_statement(req)
    m_agentravel.findAndCountAll({
        where: where_statement
    })
    .then(general.return(res))
    .catch(general.cb_error(res))
};

exports.deleteAll = (req,res) => {
    console.log('Function delete');
    general.deleteAll(m_agentravel, req, res);
}

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_agentravel, req, res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const {idagentravel} = req.params;
    general.update(m_agentravel,req,res,idagentravel);
};

exports.where_statement = (req) => {
    let where_statement = {};
    const body = general.gey_key(req);
    switch(body){
        case "idagentravel":
            where_statement.idagentravel = req.body.idagentravel;
            break;
        case "nmagentravel":
            where_statement.nmagentravel = {
                [Op.like]: '%' + req.body.nmagentravel +'%'
            };
            break;
        case "inisialagentravel": 
            where_statement.inisialagentravel = {
                [Op.like]: '%' + req.body.inisialagentravel +'%'
            }
            break;
    }
    return where_statement;
}