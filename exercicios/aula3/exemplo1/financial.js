function desconto(valor, desconto){
    return valor * (1 - desconto / 100);
}

function acrescimo(valor, acrescimo){
    return valor * (1 + acrescimo / 100);
}

function descontoDiferenciado(valor, desconto, descontoDiferenciado){
    var desconto = valor * (1 - desconto / 100);
    return desconto * (1 - descontoDiferenciado / 100);
}

module.exports = {
    desconto : desconto,
    acrescimo : acrescimo,
    descontoDiferenciado : descontoDiferenciado
}