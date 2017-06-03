function soma(){
    var resultado = arguments[0] + arguments[1]

    console.log('SOMA', arguments[0], ' e ', arguments[1], ' = ', resultado)    
}

function subtracao(){
    var resultado = arguments[0] - arguments[1]

    console.log('SUBTRACAO', arguments[0], ' e ', arguments[1], ' = ', resultado)
}

function multiplicacao(){
    var resultado = arguments[0] * arguments[1]

    console.log('MULTIPLICAÇÃO', arguments[0], ' e ', arguments[1], ' = ', resultado)
}

function divisao(){
    var resultado = arguments[0] / arguments[1]

    console.log('DIVISÃO', arguments[0], ' e ', arguments[1], ' = ', resultado)
}

function efetuaCalculo(){
    var operacao = arguments[0]

    operacao(arguments[1], arguments[2])
}

efetuaCalculo(soma, 10, 20)
efetuaCalculo(subtracao, 90, 80)
efetuaCalculo(multiplicacao, 3, 10)
efetuaCalculo(divisao, 50, 5)