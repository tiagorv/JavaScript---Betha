function imprimeArgs(){
    console.log(arguments)
}

var meuObjeto = {
    nome: 'Joao da Silva'
}

imprimeArgs()
imprimeArgs(12)
imprimeArgs('1231', 23)
imprimeArgs({teste: 'testeNovo'})
imprimeArgs(meuObjeto['nome'])