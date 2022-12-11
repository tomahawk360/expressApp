var express = require('express');
var conexion = require('./conexion');
//var savedata = require('./savedata');

var router = express.Router();

router.get("/", (req, res, next) => {
    let forma = req.query.formato;
    console.log(forma);

    conexion.getToken()
        .then((tok) => conexion.getData(tok))
        .then((data) => conexion.filterData(data))
        .then((filt) => res.render('download', {formal: forma, datal: filt}));
 
});

module.exports = router;