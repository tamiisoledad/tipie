const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
module.exports = {
    login:  (req, res) => {
        /* let errors = validationResult(req)
        if (errors.isEmpty()) { */
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(usuario => {
                if(!usuario || !bcryptjs.compareSync(req.body.password, usuario.password)){
                    let respuesta = {
                        meta: {
                            status: 404,
                            total: usuario ? usuario.length : 0 ,
                            url: '/users/login'
                        },
                        data: "credenciales invalidas"
                    }
                
                    res.json(respuesta);
                }else{
                    let respuesta = {
                        meta: {
                            status: 201,
                            total: usuario ? usuario.length : 0 ,
                            url: '/users/login'
                        },
                        data: usuario
                    }
                
                    res.json(respuesta);
                }
               
            


            }).catch(error => {
               Promise.reject("Credenciales Invalidas")
               console.log(error)
               
            })
    }
}
