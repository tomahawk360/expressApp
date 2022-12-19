var express = require('express');
var api_fetch_controller = require('../controllers/apiFetchController');

var router = express.Router();

router.get("/", api_fetch_controller.get_data);

module.exports = router;