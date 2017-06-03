function calculaIRRF(){

    salario = arguments[0].salario

    var aliquota = 0

    if (salario > 4664.68){
        aliquota = 27.5
    }else if(salario >= 3751.06){
        aliquota = 22.5
    }else if(salario >= 2826.66){
        aliquota = 15
    }else if(salario >= 1903.99){
        aliquota = 7.5
    }else{
        aliquota = 0
    }

    var irrf = salario * (aliquota / 100)

    arguments[0].irrf = irrf
    arguments[0].aliquota = aliquota

    return arguments[0]
}

var funcionario = {
    nome : 'Tiago da Rosa Valério',
    salario : 30000 
}

funcionario = calculaIRRF(funcionario)

for (var key in funcionario) {
    console.log(key, ' - ', funcionario[key])
}