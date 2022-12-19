var express = require("express");
var login_controller = require("../controllers/loginController");

var router = express.Router();

router.get("/", login_controller.login_logic);

module.exports = router;