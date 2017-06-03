var readFile = require('./read-file');

readFile('./file.json')
    .then(JSON.parse)
    .then(function(obj){
        console.log('Resultado: ', obj);
    })
    .catch(function(err){
        console.log('Erro : ', err)
    });