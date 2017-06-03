var fs = require('fs');

module.exports = function(file){
    return new Promisse(function(resolve, reject){
        fs.readFile(file, 'utf-8', function(err, res){
            if (err){
                reject(err);
            }else{
                resolve(res);
            }
        });
    });
}