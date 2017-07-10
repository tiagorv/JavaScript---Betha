function Funcionario(nome, cargo){
    Pessoa.call(this.nome);
    this.cargo = cargo;
}

Funcionario.prototype = new Pessoa;
Funcionario.prototype.constructor = Funcionario;

Funcionario.prototype.dizOi = function(){
    console.log('Ola, meu chamo: ', this.nome, ' e trabalho no cargo de ' + this.cargo);
}