var userModel = require("../models/user");

exports.login_logic = async (req, res) => {
    let fail = '';

    if(req.query.Submit == "Consulta") {
        let username = req.query.User;
        let password = req.query.Contrasena;

        const user_str = `{"username":"${username}", "password":"${password}"}`;

        userModel.exists(JSON.parse(user_str))
            .exec((err, result) => {
                if(result) {
                    res.redirect('/index');

                } else {
                    fail = 'Nombre de usuario y/o contraseña equivocada. Intente nuevamente.';
                    res.render('login', {stats: fail});

                }
            });

    } else {
        res.render('login');
    }
}