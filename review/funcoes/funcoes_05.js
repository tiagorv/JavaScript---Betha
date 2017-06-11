//Neste iremos passar uma função por parametro para calculo
function operacoesAritmetica(operacao, valor1, valor2){
    var resultado;

    resultado = operacao(valor1, valor2);

    console.log("Valor 1 : " + valor1);
    console.log("Valor 2 : " + valor2);
    console.log("Resultado: " + resultado);
}

function soma(A, B){
    return A + B;
}

operacoesAritmetica(soma, 2, 7);