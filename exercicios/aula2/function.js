var funcionario = {
    nome: 'Pedro',
    sobreNome: 'Augusto',
    nomeCompleto : function(){
        return this.nome + ' ' + this.sobreNome;
    }
}

var nome = 'Tiago'
var sobreNome = 'Valério'

var minhaFuncao = funcionario.nomeCompleto

console.log(funcionario.nomeCompleto());

console.log(minhaFuncao());