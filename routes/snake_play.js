/**
 * Created by PHowli on 7/3/2017.
 */

var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/snake.html"));

});

module.exports = router;
