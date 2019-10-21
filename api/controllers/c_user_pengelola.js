const model = require('../models');
const general = require('./_general_func');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const jwt_key = "secret";

const { m_user_pengelola, m_klpuserpengelola } = model;

exports.create_user = (req, res) => {
    console.log('Function create_user');
    const { nmuserpengelola,idklpuserpengelola,username,passwd,email,nohp } = req.body
    const obj = general.generate_unique_obj(model,req);
    m_user_pengelola.findOne({
        attributes:['email', 'username'],
        where: {
            [Op.or]: [
                obj
            ]
        }
    })
    .then(user => {
        let pk_string = general.is_pk_string(m_user_pengelola);
        console.log(pk_string);
        console.log('query findOne');
        if(user !== null){
            console.log('if (query return not null), failed to insert');
            return res.status(401).send({
                message: 'Email or username has been used'
            });
        } else {
            console.log('else (query return null), create id for user');
            m_klpuserpengelola.findOne({
                attributes:['idklpuserpengelola', 'inisialklpuserpengelola'],
                where: {
                    idklpuserpengelola: req.body.idklpuserpengelola || idklpuserpengelola
                }
            }).then(klpUser => {
                console.log('create id for user, query findOne, to get inisial user');
                let new_iduserpengelola = klpUser.inisialklpuserpengelola;
                m_user_pengelola.findAll({
                    attributes: ['iduserpengelola'],
                    limit: 1,
                    order:[['createdAt', 'DESC']]
                }).then(last_record => {
                    console.log('query findAll, to get number');
                    new_iduserpengelola = general.create_id(last_record,new_iduserpengelola);
                    console.log('concat number and inisial user was success, id = '+ new_iduserpengelola +', insert to database');
                    return m_user_pengelola.create({
                        iduserpengelola: new_iduserpengelola, 
                        idklpuserpengelola,
                        nmuserpengelola,
                        username,
                        passwd,
                        email,
                        nohp 
                    })
                    .then(userData => res.status(201).send({
                        success: true,
                        message: 'User Pengelola successfully created',
                        userData
                    }))
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
                })
            })
            }
        })
};

exports.login = (req, res) => {
    console.log('Function login');
    const { username,passwd } = req.body
    m_user_pengelola.findOne({
        attributes:['username', 'passwd'],
        where: { 
            username: req.body.username || username
        }
    })
    .then(user => {
        console.log('query findOne');
        if(user === null){
            console.log('if (query return null), user not found');
            return res.status(401).send({
                message: 'User not found'
            });
        } else {
            console.log('if (query return not null), auth password');
            bcrypt.compare(passwd, user.passwd, (err, result) => {
                if(err){
                    console.log('if (auth password error), auth invalid');
                    return res.status(401).json({
                        message : "Auth Invalid" //
                    });
                }
                if(result){
                    console.log('if (auth password success), auth success');
                    const token = jwt.sign({
                        username: user.username,
                        id: user.iduserpengelola
                    },
                    jwt_key
                    );
                    // user.update(
                    //     {last_login: new Date()},
                    // )
                    // .then(updated => {
                    //     console.log(updated);
                    // })
                    return res.status(200).send({
                        message: 'Youre login',
                        token: token
                    });
                }
                console.log('if (password incorrect), auth invalid');
                return res.status(401).send({
                    message: 'Password Incorrect'
                });
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.get = (req,res) => {
    console.log('Function get');
    general.get(m_user_pengelola, req, res);
};

exports.delete = (req,res) => {
    console.log('Function delete');
    general.delete(m_user_pengelola, req, res);
};