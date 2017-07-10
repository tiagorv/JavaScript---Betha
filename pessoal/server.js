var http = require('http');
var app = require('./config/express');
var database = require('./config/database');

database('mongodb://localhost/pessoal');

http
    .createServer(app)
    .listen(8080, function(){
        console.log('Servidor Iniciado com Sucesso na Porta 8080!!!')
    })