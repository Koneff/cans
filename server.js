var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');


dotenv.load();

var API_KEY = process.env['MANDRILL_KEY']
var mandrill = require('mandrill-api/mandrill');

mandrill_client = new mandrill.Mandrill(API_KEY);

var app = express();
app.use(bodyParser.json());


var apiPort = process.env['PORT']||3000;
app.listen(apiPort);