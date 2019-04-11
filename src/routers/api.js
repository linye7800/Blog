/**
 * Created by Lincoln on 2019-03-12.
 */

var express = require('express');

var router = express.Router();

import { getRepository } from 'typeorm';

import { User } from "../entity/user";

router.get('/user', async function (req, res, next) {
    // res.send('API-User');
    console.log("res userObj===>12");
    const userRepository = getRepository(User);

    const userObj = await userRepository.find({ id: 1 });

    res.send(JSON.stringify(userObj));
});

module.exports = router;
