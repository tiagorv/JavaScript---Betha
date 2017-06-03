class Carro{
    constructor(){
        console.log("Criando um novo carro...");
    }
}

class Porsche extends Carro{
    constructor(){
        super();
        console.log("Criando um carro!!!");
    }
}

let c = new Porsche();