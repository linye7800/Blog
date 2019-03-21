/**
 * Created by Lincoln on 2019-03-12.
 */

const express = require('express');

const router = express.Router();

router.get('/user', function (req, res, next) {
    res.send('API-User');
});

module.exports = router;
