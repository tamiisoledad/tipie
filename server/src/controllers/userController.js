const db = require('../database/models');
const { validationResult } = require('express-validator');

module.exports = {
    login: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(usuario => {
                let respuesta = {
                    meta: {
                        status: 201,
                        total: usuario.length,
                        url: '/users/login'
                    },
                    data: usuario
                }
                res.json(respuesta);
            }).catch(error => {
               Promise.reject("Credenciales Invalidas")
                console.log(error)
            })
        } else {
            return { errores: errors.mapped() }
        }
    }
}