var express = require('express');
var router = express.Router();
var {list} = require("../controllers/indexController")


/* rutas */
router.get('/list', list)

module.exports = router;
