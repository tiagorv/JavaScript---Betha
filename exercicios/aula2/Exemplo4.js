function Cliente(documento, nome, telefone, email){

    this.documento = documento;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;

    this.geraJSon = function(){
        return JSON.stringify(this);
    }
}

var cli = new Cliente("036.594", "Tiago")
console.log(cli.geraJSon())