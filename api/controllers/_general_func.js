const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const url = require('url');
const general = require('./_general_func');

exports.create = (model,req,res) => {
    const obj = general.generate_unique_obj(model,req);
    if(obj !== null){
        console.log("unique");
        model.findOne({
            where: {
                [Op.or] : [
                    obj
                ]
            }
        })
        .then(find => {
            console.log('query findOne');
            if(find !== null){
                return general.auth_failed(res)
            } else {
                return general.send_to_db(model,req,res);
            }
        })
    } else {
        console.log('return null');
        return null;
    }
};

exports.create1 = (model,req,res) => {
    const obj = general.generate_unique_obj(model,req);
    const attributes = general.generate_attributes(model);
    if(obj !== null){
        console.log("unique");
        model.findOne({
            attributes:{
                exclude: attributes
            },
            where: {
                [Op.or] : [
                    obj
                ]
            }
        })
        .then(find => {
            console.log('query findOne');
            if(find !== null){
                return general.auth_failed(res)
            } else {
                return general.send_to_db(model,req,res);
            }
        })
    } else {
        console.log('return null');
        return null;
    }
};

exports.get = (model,req,res) => {
    const id_ = req.params
    model.findOne({
        where: {
            [Op.or] : [
                id_
            ]
        }
    })
    .then(result => {
        console.log('query findByPk');
        if(result){
            res.status(200).json({
                record: result,
            });
            console.log('if (query return not null), get record');
        } else {
            res.status(404).json({
                message: "No valid entry found"
            })
            console.log('else (query return null), empty record');
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.getAll = (model,req,res) => {
    model.findAndCountAll()
    .then(result => {
        const response = {
            count: result.count,
            result: result.rows
        }
        res.status(200).json(response);
        console.log('get all records');
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.update = (model,req,res,id) => {
    let obj = general.generate_unique_obj(model,req);
    let upd = general.generate_obj(model,req,id);
    console.log(upd);
    if(obj !== null){
        console.log("unique");
        model.findOne({
            where: {
                [Op.or] : [
                    obj
                ]
            }
        })
        .then(find => {
            console.log('query findOne');
            if(find !== null){
                return general.auth_failed(res)
            } else {
                return general.update_db(model,req,res,id,upd);
            }
        })
    } else {
        console.log('return null');
        return null;
    }
};

exports.update1 = (model,req,res,id) => {
    const obj = general.generate_unique_obj(model,req);
    const attributes = general.generate_attributes(model);
    if(obj !== null){
        console.log("unique");
        model.findOne({
            attributes:{
                exclude: attributes
            },
            where: {
                [Op.or] : [
                    obj
                ]
            }
        })
        .then(find => {
            console.log('query findOne');
            if(find !== null){
                return general.auth_failed(res)
            } else {
                return general.update_db_(model,req,res,id);
            }
        })
    } else {
        console.log('return null');
        return null;
    }
};

exports.delete = (model,req,res) => {
    console.log('Function delete');
    const id_ = req.params
    model.findOne({
        where: {
            [Op.or] : [
                id_
            ]
        }
    })
    .then(deleted => {
        if(deleted !== null){
            deleted.destroy()
            .then(result => {
                console.log('query destroy/delete');
                if(result){
                    res.status(200).json({
                        message: "record deleted",
                    });
                    console.log('if (query return not null) delete record');
                } 
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
            
        } else {
            res.status(404).json({
                message: "No record deleted"
            })
            console.log('else (query return null) no record deleted');
        }
    })
};

exports.deleteAll = (model,req,res) => {
    if(model !== null){
        model.destroy({
            where: {},
            // truncate: true
        })
        .then(result => {
            console.log('query destroy/delete all');
            if(result){
                res.status(200).json({
                    message: "All record deleted",
                });
                console.log('if (query return not null) delete all record');
            } 
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    } else {
        res.status(404).json({
            message: "No record deleted"
        })
        console.log('else (query return null) no record deleted');
    }
}

exports.create_id = (model,new_id) => {
    console.log("create_id");
    new_id = new_id.concat("_");
    if(model.length === 0){
        new_id = new_id.concat("1");
        console.log("if (query length = 0), number = 1");
        return new_id;
    } else {
        console.log(model);
        for(let key_ in model[0].dataValues){
            const rec = model[0].dataValues[key_];
            let number = rec.split("_",2);
            let num = parseInt(number[1]) + 1;
            new_id = new_id.concat(num);
            console.log('concat number was success, id = '+ new_id);
            return new_id;
        }
    }
};

exports.create_id_ = (model,new_id) => {
    console.log("create_id");
    new_id = new_id.concat("_");
    if(model.length === 0){
        new_id = new_id.concat("1");
        console.log("if (query length = 0), number = 1");
        return new_id;
    } else {
        console.log(model);
        for(let key_ in model.dataValues){
            const rec = model.dataValues[key_];
            let number = rec.split("_",2);
            let num = parseInt(number[1]) + 1;
            new_id = new_id.concat(num);
            console.log('concat number was success, id = '+ new_id);
            return new_id;
        }
    }
};

exports.send_to_db = (model,req,res) => {
    console.log("&unique");
    const id = null;
    let obj = general.generate_obj(model,req,id);
    
    return model.create(obj)
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
};

exports.update_db = (model,req,res,id,upd) => {
    let obj = general.generate_obj(model,req,id);
    console.log(upd);
    return model.findByPk(id)
    .then(new_record => {
        console.log('query findByPk');
        if(new_record !== null){
            new_record.update(upd)
            .then(updated => {
                console.log('query update');
                res.status(200).send({
                    message: 'successfully updated',
                    update: updated
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            })
        } else {
            return general.auth_failed(res)
        }
    })
};

exports.update_db_ = (model,req,res,id) => {
    const obj = general.generate_obj(model,req,id);
    const attributes = general.generate_attributes(model);
    const id_obj = general.generate_id_obj(model,id);
    console.log(id_obj);
    return model.findOne({
        attributes:{
            exclude: attributes
        },
        where: {
            [Op.or] : [
                id_obj
            ]
        }
    })
    .then(new_record => {
        console.log(new_record);
        console.log('query findByPk');
        if(new_record !== null){
            new_record.update(obj)
            .then(updated => {
                console.log('query update');
                res.status(200).send({
                    message: 'successfully updated',
                    update: updated
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            })
        } else {
            return general.auth_failed(res)
        }
    })
};

exports.generate_attributes = (model) => {
    let obj = [];
    let i,j=0;
    for(let key in model.rawAttributes){
        i = 0;
        while (i <= key.length){
            let character = key.charAt(i);
            if(character !== character.toLowerCase()) {
                console.log(key);
                obj[j] = key;
                j++;
                break;
            }
            i++;
        }
    }
    return obj;
};

exports.generate_obj = (model,req,id) => {
    let obj = {};
    for(let key_ in model.rawAttributes){
        if(id !== null){
            if(model.rawAttributes[key_].primaryKey){
                obj[key_] = id
                continue;
            }
        }
        if(model.rawAttributes[key_].type.key === 'TIMESTAMP'){
            continue;
        }
        for(let key in req.body){
            if(key != key_){
                continue;
            }
            obj[key_] = req.body[key];
        }
    }
    return obj;
};

exports.generate_search_obj = (model,req) => {
    let obj = {};
    console.log(req.body);
    for(let key_ in model.rawAttributes){
        if(model.rawAttributes[key_].type.key === 'TIMESTAMP'){
            continue;
        }
        for(let key in req.body){
            if(key != key_){
                continue;
            }
            obj[key_] = req.body[key].toLowerCase();;
        }
    }
    return obj;
};

exports.return = (res) => {
    return result => {
        if(result === null){
            res.status(404).json({
                message: 'search not found',
            })
        } else {
            const response = {
                result: result.rows
            };
            res.status(200).json(response);
            console.log('found ' + result.count +  ' results');
        }
    }
};

exports.generate_search_object = (model,req) => {
    let obj = {};
    console.log(req.body);
    for(let key_ in model.rawAttributes){
        if(model.rawAttributes[key_].type.key === 'TIMESTAMP'){
            continue;
        }
        for(let key in req.body){
            if(key != key_){
                continue;
            }
            obj[key_] = req.body[key];
        }
    }
    return obj;
};

exports.gey_key =(req) => {
    for(let key in req.body){
        return key;
    }
}

exports.generate_unique_obj = (model, req) => {
    let obj = {}
    for(let key_ in model.rawAttributes){
        if(model.rawAttributes[key_].unique){
            for(let key in req.body){
                if(key != key_){
                    continue;
                }
                obj[key_] = req.body[key];
            }
        }
    }
    if(obj === null){
        console.log('return null');
        return null
    } else {
        console.log('return obj');
        return obj;
    }
};

exports.generate_id_obj = (model, id) => {
    let obj = {}
    for(let key_ in model.rawAttributes){
        if(model.rawAttributes[key_].primaryKey){
            obj[key_] = id;
        }
    }
    if(obj === null){
        console.log('return null');
        return null
    } else {
        console.log('return obj');
        return obj;
    }
};

exports.generate_attributes = (model) => {
    let obj = [];
    let i,j=0;
    for(let key in model.rawAttributes){
        i = 0;
        while (i <= key.length){
            let character = key.charAt(i);
            if(character !== character.toLowerCase()) {
                console.log(key);
                obj[j] = key;
                j++;
                break;
            }
            i++;
        }
    }
    return obj;
};

exports.is_pk_string = (model) => {
    for(let key_ in model.rawAttributes){
        if(model.rawAttributes[key_].primaryKey){
            if(model.rawAttributes[key_].type._length === 255){
                return true
            } else {
                return false
            }
        }
    }
};

exports.auth_failed = (res) => {
    return res.status(401).json({
        message: 'Auth Failed'
    });
};

exports.cb_error = (res) => {
    return err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
};


// ==============dev==================


exports.create_ = (model,req,res) => {
    let obj = general.generate_unique_obj(model,req);
    if(obj !== null){
        console.log("unique");
        model.findOne({
            where: {
                [Op.or] : [
                    obj
                ]
            }
        })
        .then(find => {
            if(this.is_pk_string(m_user_pengelola)){
                general.create_id(model,find)
            }
            console.log('query findOne');
            if(find !== null){
                return general.auth_failed(res)
            } else {
                return general.send_to_db(model,req,res);
            }
        })
    } else {
        console.log('return null');
        return null;
    }
};