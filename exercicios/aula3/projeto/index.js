var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
var resources = require('./resources')

resources(app)

app.use(express.static('./public'));

http.createServer(app).listen(8080, function(){
    console.log('Servidor aberto na porta 8080..')
})