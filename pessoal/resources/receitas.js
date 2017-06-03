var mongoose = require('mongoose');

var modelo = mongoose.model('receitas');

module.exports = function (app) {

  app.get('/api/receitas', function(req, resp) {
        modelo.find()
            .then(function(dados){
                resp.json(dados);
            }, function(erro){
                resp.status(500).json(erro);
            });
  });

  app.get('/api/receitas/:id', function(req, resp) {
        modelo.findById(req.params.id)
            .then(function(data){
                resp.json(data);
        }, function(erro){
                resp.status(500).json(erro);
        });
  });    

  app.post('/api/receitas', function(req, resp) {
        modelo.create(req.body)
            .then(function(dado) {
                resp.json(dado);
            }, function(erro){
                resp.status(500).json(erro);
            });
  });

  app.put('/api/receitas/:id', function(req, resp){
        modelo.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(function(data) {
            resp.json(data)
        }, function(erro){
            resp.status(500).json(erro)
        })  
  });  

  app.delete('/api/receitas/:id', function(req, resp){
      modelo.findByIdAndRemove(new Object(req.params.id), function(err, receitas) {
        if (err) {
            resp.status(500);
            resp.json({
                type: false,
                data: "Erro ocorrido: " + err
            })
        } else {
            resp.json({
                type: true,
                data: "Receita: " + req.params.id + " removido com sucesso"
            })
        }
    })
  });
}