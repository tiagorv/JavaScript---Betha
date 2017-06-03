function calculaDesconto(){

    var desconto = arguments[1] || 25

    var valorDesconto = arguments[0] * (desconto / 100)

    console.log('Valor R$: ', arguments[0], ' ', desconto, '% = ', valorDesconto)

}

calculaDesconto(100)
calculaDesconto(100, 30)