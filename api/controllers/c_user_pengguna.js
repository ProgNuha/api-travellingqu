const model = require('../models');
const general = require('./_general_func');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const jwt_key = "secret";
const { m_user_pengguna, m_klpuserpengguna } = model;

exports.create_user = (req, res) =>  {
    console.log('Function create_user');
    const { nmuserpengguna ,username,passwd,email,nohp } = req.body
    const idklpuserpengguna = 1
    const attributes = general.generate_attributes(m_user_pengguna);
    m_user_pengguna.findOne({
        attributes: ['email', 'username'],
        where: {
            [Op.or]: [
                { email: req.body.email || email}, 
                { username: req.body.username || username}
            ]
        }
    })
    .then(user => {
        console.log('query findOne');
        if(user !== null){
            console.log('if (query return not null), failed to insert');
            return res.status(401).send({
                message: 'Email or username has been used'
            });
        } else {
            console.log('else (query return null), create id for user');
            m_klpuserpengguna.findOne({
                where: {
                    idklpuserpengguna: idklpuserpengguna
                }
            }).then(klpUser => {
                console.log('create id for user');
                console.log('query findOne, to get inisial user');
                let new_iduserpengguna = klpUser.inisialklpuserpengguna
                new_iduserpengguna = new_iduserpengguna.concat("_");
                m_user_pengguna.findAll({
                    attributes:{
                        exclude: attributes
                    },
                    limit: 1,
                    order:[['iduserpengguna', 'DESC']]
                }).then(last_record => {
                    console.log('query findAll, to get number');
                    console.log(last_record);
                    if(last_record.length === 0){
                        new_iduserpengguna = new_iduserpengguna.concat("1");
                        console.log("if (query length = 0), number = 1");
                    } else {
                        const rec = last_record[0].iduserpengguna;
                        console.log(res + "@");
                        let number = rec.split("_",2);
                        var num = parseInt(number[1]) + 1;
                        new_iduserpengguna = new_iduserpengguna.concat(num);
                        console.log("else (query length != 0), number = " + num);
                    }
                    console.log('concat number and inisial user was success, id = '+ new_iduserpengguna +', insert to database');
                    return m_user_pengguna.create({
                        iduserpengguna: new_iduserpengguna, 
                        idklpuserpengguna,
                        nmuserpengguna,
                        username,
                        passwd: hash,
                        email,
                        nohp 
                    })
                    .then(userData => res.status(201).send({
                        success: true,
                        message: 'User Pengguna successfully created',
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

exports.login = (req, res) =>  {
    console.log('Function login');
    const { username, passwd } = req.body
    m_user_pengguna.findOne({
        attributes:['username','passwd','iduserpengguna'],
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
                if(result){
                    console.log('if (auth password success), auth success');
                    const token = jwt.sign({
                        username: user.username
                    },
                        jwt_key
                    );
                    return res.status(200).json({
                        message: 'Youre login',
                        id_user_pengguna: user.iduserpengguna,
                        token: token
                    });
                }
                if(err){
                    console.log('if (auth password error), auth invalid');
                    return res.status(401).json({
                        message : "Auth Invalid" //
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

exports.get = (req, res) => {
    console.log('Function get');
    general.get(m_user_pengguna, req, res);
};

exports.delete = (req, res) => {
    console.log('Function delete');
    general.delete(m_user_pengguna, req, res);
};

exports.update = (req,res) => {
    console.log('Function update');
    const {iduserpengguna} = req.params;
    general.update(m_user_pengguna, req, res, iduserpengguna)
};

exports.forgot_passwd = (req,res) => {
    const { username, email } = req.body;
    m_user_pengguna.findAll({
        attributes: ['email', 'username','iduserpengguna'],
        where: {
            [Op.or]: [
                { email: req.body.email || email}, 
                { username: req.body.username || username}
            ]
        }
    })
    .then(result => {
        console.log('before if');
        if(result === null){
            console.log('if (query return null), user not found');
            return res.status(401).send({
                message: 'User or email not found'
            });
        } else {
            console.log('else (query return not null), user found');
            return res.status(200).json({
                result: result,
                message: 'User or email was found'
            });
        }
    })
    .catch(general.cb_error(res));
};

exports.update_passwd = (req,res) => {
    const { iduserpengguna } = req.body;
    let upd = general.generate_obj(m_user_pengguna,req,iduserpengguna);
    return general.update_db(m_user_pengguna,req,res,iduserpengguna,upd);
};

