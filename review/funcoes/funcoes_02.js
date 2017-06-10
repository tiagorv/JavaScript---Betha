//Esta função vai calcular o IMC de uma pessoa
//Estará preparada para receber 2 argumentos number ou um objeto com as informações de peso e altura
//Então iremos verificar a quantidade de parametros e os seus tipos para efetuar o calculo
//formula de IMC = Peso / (altura * altura)

function calculaIMC(){

    var imc = 0, peso = 0, altura = 0;

    //Neste caso estamos esperando os valores peso e altura por para
    if (arguments.length == 2){
        if (typeof(arguments[0]) == "number" && typeof(arguments[1]) == "number") {
            peso   = arguments[0];
            altura = arguments[1];
            imc = peso / (altura * altura);
        }
    }else{
        if (arguments.length == 1){
            if (typeof(arguments[0]) == "object"){
                var meuObjeto = arguments[0];

                if (meuObjeto.hasOwnProperty("peso") && meuObjeto.hasOwnProperty("altura")){
                    if (typeof(meuObjeto.altura) == "number" && typeof(meuObjeto.peso) == "number"){
                        peso   = meuObjeto.peso;
                        altura = meuObjeto.altura;
                        imc = peso / (altura * altura);
                    }
                }
            }
        }
    }

    if (imc){
        console.log("IMC Calculado");
        console.log("Peso : " + peso);
        console.log("Altura : " + altura);
        console.log("IMC : " + imc);
    }else{
        console.log("Informações inválidas para calculo do IMC.")
    }
}

calculaIMC(70, 1.65);

calculaIMC(1);

var meuObjeto = {"peso" : 65,
                 "altura" : 1.56};
calculaIMC(meuObjeto);