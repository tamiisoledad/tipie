const db = require("../database/models")

module.exports = {
    list: (req, res) => {
        let empleado = db.Employee.findAll({
            include: ["category"]
        });
        let categoria = db.Category.findAll({
            order: [["name"]]
        })

        Promise.all([empleado, categoria])
        
            .then(function ([employee, category]) {
                let respuesta = {
                    meta: {
                        status: 201,
                        total: employee.length,
                        url: '/list'
                    },
                    data: [employee, category]
                }
                res.json(respuesta);
            })
            .catch(error => console.log(error))
    }
}