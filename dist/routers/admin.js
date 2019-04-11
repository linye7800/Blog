'use strict';

/**
 * Created by Lincoln on 2019-03-12.
 */

var express = require('express');
var router = express.Router();

router.get('/user', function (req, res, next) {
  res.send("Admin-User");
});

module.exports = router;