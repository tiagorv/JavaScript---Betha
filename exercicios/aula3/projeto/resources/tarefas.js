module.exports = function(app){
    app.get('/api/tarefas', function(req, resp){
        resp.json([{
            descricao: 'Implementar Cadastro de Logradouros',
            hora: 3
        }, {
            descricao: 'Implementar Cadastro de Bairros',
            hora: 3.5
        }]);
    })
}