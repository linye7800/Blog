/**
 * Created by Lincoln on 2019-03-12.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index');
});

module.exports = router;
