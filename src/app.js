/**
 * Created by Lincoln on 2019-03-12.
 *
 * app (entrance) start
 */

var express = require('express');
var swig = require('swig');
import "reflect-metadata";
import { createConnection } from "typeorm";

// app => http services
var app = express();

//static files
app.use('/public', express.static( __dirname + '/public'));

// Front-end Back-end
app.engine('html', swig.renderFile);

app.set('views', './views/main/');

app.set('view engine', 'html');

createConnection();

app.listen(3000);

swig.setDefaults({cache: false});

app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'));


