function Pessoa(nome){
    this.nome =nome;
}

Pessoa.prototype.dizOi = function(){
    console.log('Ola, meu nome é : ', this.nome);
}

Pessoa.prototype.dizTchau = funtion(){
    console.log('Tchau!!!!');
}

var pedro = new Pessoa('Tiago da Rosa Valério');
pedro.dizOi();
pedro.dizTchau();