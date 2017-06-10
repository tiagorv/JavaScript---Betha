//Esta função vai receber 2 parâmetros. 
//Sendo o valor e o desconto, sendo que se o usuário não informar o desconto será 25%
function calculaDesconto(){
    var valorDesconto, valorCompra, valorLiquido;

    if (arguments.length > 0){
        if (typeof(arguments[0]) == "number"){
            valorCompra = arguments[0];
        }

        if (arguments.length > 1 && typeof(arguments[1]) == "number"){
            valorDesconto = arguments[1];
            if (valorDesconto < 0 || valorDesconto > 100){
                valorDesconto = 25;
            }
            valorDesconto = valorDesconto / 100;
        }else{
            valorDesconto = 0.25;
        }
    }

    if (valorDesconto && valorCompra){
        valorDesconto = valorCompra * valorDesconto;
        valorLiquido  = valorCompra - valorDesconto;
        console.log("Valor da Compra R$: " + valorCompra);
        console.log("Valor de Desconto R$: " + valorDesconto);
        console.log("Valor Líquido R$: " + valorLiquido);
    }else{
        console.log("Valores inválidos para cálculo do desconto!!!")
    }
}
calculaDesconto(150, 20);
calculaDesconto(1200);
calculaDesconto("111");