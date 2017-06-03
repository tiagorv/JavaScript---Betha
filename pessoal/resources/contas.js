var mongoose = require('mongoose');

var contasModel = mongoose.model('contas');

module.exports = function (app) {

  app.get('/api/contas', function(req, resp) {
        contasModel.find()
            .then(function(dados){
                resp.json(dados);
            }, function(erro){
                resp.status(500).json(erro);
            });
  });

  app.get('/api/contas/:id', function(req, resp) {
        contasModel.findById(req.params.id)
            .then(function(data){
                resp.json(data);
        }, function(erro){
                resp.status(500).json(erro);
        });
  });    

  app.post('/api/contas', function(req, resp) {
        contasModel.create(req.body)
            .then(function(dado) {
                resp.json(dado);
            }, function(erro){
                resp.status(500).json(erro);
            });
  });

  app.put('/api/contas/:id', function(req, resp){
        contasModel.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(function(data) {
            resp.json(data)
        }, function(erro){
            resp.status(500).json(erro)
        })  
  });  

  app.delete('/api/contas/:id', function(req, resp){
      contasModel.findByIdAndRemove(new Object(req.params.id), function(err, contas) {
        if (err) {
            resp.status(500);
            resp.json({
                type: false,
                data: "Erro ocorrido: " + err
            })
        } else {
            resp.json({
                type: true,
                data: "Conta: " + req.params.id + " removido com sucesso"
            })
        }
    })
  });
}