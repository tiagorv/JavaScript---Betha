var mongoose = require('mongoose');
var contasModel = mongoose.model('contas');
var parseParams = require('../utils/parse-params');

module.exports = function (app) {

  app.get('/api/contas', function (req, resp) {
    var fields = {
      score: { $meta: 'textScore' },
      _id: 1,
      banco: 1,
      numero: 1,
      titular: 1,
      saldo: 1
    };

    contasModel.find(parseParams(req.query.filter), fields, { sort: { score: {$meta: 'textScore'}, banco: 1 } })
      .then(function (dados) {
        resp.json(dados);
      }, function (erro) {
        resp.status(500).json(erro);
      })
      
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