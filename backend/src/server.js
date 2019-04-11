/**
 * Created by Lincoln on 2019-03-12.
 *
 * server (entrance) start
 */

var express = require('express');
var swig = require('swig');
import "reflect-metadata";
import { createConnection } from "typeorm";

// server => http services
var server = express();

createConnection();

server.listen(5000);


swig.setDefaults({cache: false});

server.use('/admin', require('./routers/admin'));
server.use('/api', require('./routers/api'));
server.use('/', require('./routers/main'));


