function Pessoa(nome){
    this.nome = nome;
}

Pessoa.prototype.dizOi = function(){
    console.log("Ola, meu nome é : ", this.nome)
}

Pessoa.prototype.dizTchau = function(){
    console.log("Tchau...")
}


function Funcionario(nome, cargo){

    Pessoa.call(this, nome)
    this.cargo = cargo

}

Funcionario.prototype = new Pessoa;
Funcionario.prototype.constructor = Funcionario

Funcionario.prototype.dizOi = function(){
    console.log('Ola, me chamo,',  this.nome, ' e trabalho de ', this.cargo)
}

var pedro = new Pessoa("Pedro")
pedro.dizOi();
pedro.dizTchau();

var joao = new Funcionario('Joao', 'analista')
joao.dizOi();
joao.dizTchau()

console.log('Joao é instancia de Pessoa', joao instanceof Pessoa )
console.log('Joao é instancia de Funcionario', joao instanceof Funcionario)
console.log('Pedro é instancia de Pessoa', pedro instanceof Pessoa )
console.log('Pedro é instancia de Funcionario', pedro instanceof Funcionario)