var express = require('express');
var router = express.Router();
var {login} = require("../controllers/userController");
var loginValidator = require("../validations/loginValidation");

/* rutas */
router.post('/login', loginValidator, login);

module.exports = router;
