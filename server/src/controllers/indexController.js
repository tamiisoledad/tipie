const db = require("../database/models")

module.exports = {
    list: (req, res) => {
        db.Employee.findAll()
            .then(employee => {
                let respuesta = {
                    meta: {
                        status: 201,
                        total: employee.length,
                        url: '/list'
                    },
                    data: employee
                }
                res.json(respuesta);
            })
            .catch(error => console.log(error))
    }
}