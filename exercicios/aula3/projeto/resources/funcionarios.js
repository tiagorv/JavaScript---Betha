module.exports = function(app){
    app.get('/api/funcionarios', function(req, resp){
        resp.json([{
            nome: 'Tiago da Rosa Valério',
            funcao: 'Analista de Sistemas',
            horas: 8
        }, {
            nome: 'Lucas Motta',
            funcao: 'Analista de Sistemas',
            horas: 8
        }, {
            nome: 'Darjane da Silva',
            funcao: 'Programador de Sistemas',
            horas: 8
        }]);
    })

    app.post('/api/funcionarios', function(req, resp){
        console.log(req.body);
        resp.json(req.body);
    })

    app.get('/api/funcionarios/id', function(req, resp){})
    app.put('/api/funcionarios/id', function(req, resp){})
    app.delete('/api/funcionarios/id', function(req, resp){})

}