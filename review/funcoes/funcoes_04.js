//Neste será passado um objeto funcionário, será calculado o irrf e adicionada uma propriedade no objeto com irrf.
function aliquotaIRRF(valor){
    if (valor <= 1903.98){
        return 0;
    }else if (valor <= 2826.65){
        return 7.5;
    }else if (valor <= 3751.05){
        return 15;
    }else if (valor <= 4664.68){
        return 22.5
    }else{
        return 27.5
    }
}

function calculaIRRF(){
    var valorIRRF = 0, meuObjeto, valorSalario = 0;

    if (arguments.length > 0){
        meuObjeto = arguments[0];
        if (typeof(meuObjeto) == "object" && meuObjeto.hasOwnProperty("salario")){
            valorSalario = meuObjeto.salario;

            var aliquota = aliquotaIRRF(valorSalario);
            valorIRRF = valorSalario * (aliquota / 100);
        }
    }

    meuObjeto.IRRF = valorIRRF;
    meuObjeto.aliquotaIRRF = aliquota;
    console.log(meuObjeto);
}

var funcionario = {"nome" : "Tiago da Rosa Valério", "salario" : 2300}
calculaIRRF(funcionario);