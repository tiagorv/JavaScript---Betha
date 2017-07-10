var mongoose = require('mongoose');
var modelo = mongoose.model('despesas');
var parseParams = require('../utils/parse-params');

module.exports = function (app) {

  app.get('/api/despesas', function (req, resp) {
    var fields = {
      score: { $meta: 'textScore' },
      _id: 1,
      descricao: 1,
      valor: 1,
      data_vencimento: 1,
      data_pagamento: 1,
      parcela: 1,
      qtd_parcela: 1,
      mes: 1,
      ano: 1,
      situacao: 1,
      conta: 1
    };

    modelo.find(parseParams(req.query.filter), fields, { sort: { score: {$meta: 'textScore'}, descricao: 1 } })
      .then(function (dados) {
        resp.json(dados);
      }, function (erro) {
        resp.status(500).json(erro);
      })
      
  });  

  app.get('/api/despesas/:id', function(req, resp) {
        modelo.findById(req.params.id)
            .then(function(data){
                resp.json(data);
        }, function(erro){
                resp.status(500).json(erro);
        });
  });    

  app.post('/api/despesas', function(req, resp) {
        modelo.create(req.body)
            .then(function(dado) {
                resp.json(dado);
            }, function(erro){
                resp.status(500).json(erro);
            });
  });

  app.put('/api/despesas/:id', function(req, resp){
        modelo.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(function(data) {
            resp.json(data)
        }, function(erro){
            resp.status(500).json(erro)
        })  
  });  

  app.delete('/api/despesas/:id', function(req, resp){
      modelo.findByIdAndRemove(new Object(req.params.id), function(err, despesas) {
        if (err) {
            resp.status(500);
            resp.json({
                type: false,
                data: "Erro ocorrido: " + err
            })
        } else {
            resp.json({
                type: true,
                data: "Despesa: " + req.params.id + " removido com sucesso"
            })
        }
    })
  });
}