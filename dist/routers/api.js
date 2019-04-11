'use strict';

var _typeorm = require('typeorm');

var _user = require('../entity/user');

/**
 * Created by Lincoln on 2019-03-12.
 */

var express = require('express');

var router = express.Router();

router.get('/user', async function (req, res, next) {
    // res.send('API-User');
    var userRepository = (0, _typeorm.getRepository)(_user.User);

    var userObj = await userRepository.find({ id: 1 });
    console.log("res userObj===>12312312", userObj);
    res.send(JSON.stringify(userObj));
});

module.exports = router;