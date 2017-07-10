var mongoose = require('mongoose');
mongoose.Promise = Promise;

module.exports = function (uri) {
    mongoose.connect(uri);

    mongoose.connection.on('connected', function(){
        console.log('Mongoose conectado em ', uri);
    });

    mongoose.connection.on('error', function(error){
        console.log('Erro de Conexão: ' + error);
    });

    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose desconectado de ', uri);
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Aplicação terminada, conexão fechada...');
            process.exit(0);
        });
    });

    
}