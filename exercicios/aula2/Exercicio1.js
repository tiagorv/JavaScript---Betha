function calculaMedia(){

    var numeros = 0;
    for(var i = 0; i < arguments.length; i++){
        var numeros = numeros + arguments[i]
    }

    var media = numeros / arguments.length

    console.log('Média: ' , media)
}

calculaMedia(10, 30, 40, 50)
calculaMedia(10, 15)
calculaMedia(8)