var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
    let fail = '';

    if(req.query.Submit == "Consulta") {
        let username = req.query.User;
        let password = req.query.Contrasena;

        console.log("Horacio");
        
        if(username == 'investigador_1' && password == '1313') {
            res.redirect("/index");
        } else {
            fail = 'Nombre de usuario y/o contraseña equivocada. Intente nuevamente.';
        }
    }

    res.render('login', {stats: fail});
})

module.exports = router;