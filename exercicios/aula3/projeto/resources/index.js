var funcionarios = require('./funcionarios');
var projetos = require('./projetos');
var tarefas = require('./tarefas')

module.exports = function(app){
    funcionarios(app);
    projetos(app);
    tarefas(app);
}