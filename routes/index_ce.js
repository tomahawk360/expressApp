var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.render('index_ce');
})

module.exports = router;