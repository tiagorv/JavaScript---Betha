//Este exercicio vai calcular a média, indiferente da quantidade de parâmetros
function calculaMedia(){

    var soma = 0, resultado = 0;
    var numeros = "";

    for(contador= 0; contador < arguments.length; contador++ ){
        if (numeros){
            numeros += ","
        }

        numeros = numeros + arguments[contador];
        soma += arguments[contador];
    }

    if (arguments.length){
        resultado = soma / arguments.length;
    }

    console.log("Média dos números (" + numeros + ") = " + resultado);
}

calculaMedia(3, 4, 5);
calculaMedia(2, 22);
calculaMedia(2);