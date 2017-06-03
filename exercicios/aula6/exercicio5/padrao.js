
let getPrecoFinal = (preco, imposto = 0.7) => {
    return preco + preco * imposto;
}

function print(x, y, z){
    console.log(x, y, z);
}

let arr = [1, 2, 3];
print(...arr);

function print(...args){
    console.log(args);
}

print(1, 2, 3, 4, 5);
