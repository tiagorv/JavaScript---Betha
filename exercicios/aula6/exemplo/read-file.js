var fs = require('fs');

module.exports = function(filename){
    return new Promisse(function(resolve, reject){
        fs.readFile(filename, 'utf-8', function(err, res){
            if(err){
                reject(err);
            } else{
                resolve(res);
            }
        })
    })
}