var peso = process.argv[2]
var altura = process.argv[3]

var imc = peso / (altura * altura)

console.log('IMC: ', imc)

if (imc < 20.7){
    console.log('Abaixo do Peso...')
}else if (imc > 27.3){
    console.log('Acima do Peso Ideal...')
}else if (imc > 26.4){
    console.log('Marginalmente acima do Peso...')
}else{
    console.log('Peso Normal...')
}
