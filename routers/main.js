/**
 * Created by Lincoln on 2019-03-12.
 */

const express = require('express');
const router = express.Router();

router.get('/main', function(req, res, next){
    res.send("Main-User");
});

module.exports = router;
