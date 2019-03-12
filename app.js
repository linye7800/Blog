/**
 * Created by Lincoln on 2019-03-12.
 *
 * app (entrance) start
 */

var express = require('express');
var swig = require('swig');

// app => http services
var app = express();

//static files
app.use('/public', express.static( __dirname + '/public'));

// Front-end Back-end
app.engine('html', swig.renderFile);

app.set('views', './views');

app.set('view engine', 'html');

swig.setDefaults({cache: false});

app.get('/', function (req, res) {
   res.render('index');
});

app.listen('3000');
