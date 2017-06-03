module.exports = function(app){
    app.get('/api/projetos', function(req, resp){
        resp.json([{
            descricao: 'Release Primavera',
            sistema: 'Tributos Cloud',
            entrega: 10/12/2017
        }, {
            descricao: 'Release Outono',
            sistema: 'Tributos Cloud',
            entrega: new Date()
        }]);
    })
}