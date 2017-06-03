function calculaIMC(){

    var peso;
    var altura;

    if (typeof(arguments[0]) == 'object'){
        peso = arguments[0].peso
        altura = arguments[0].altura 
    }else{
        peso = arguments[0]
        altura = arguments[1]
    }

    var imc = peso / (altura * altura)
    console.log('IMC : ' , imc);
}

calculaIMC(pessoa = {peso: 80, altura: 1.85})
calculaIMC(75, 1.80)