let oValor = 0o10;
console.log(oValor);

let bValor = 0b10;
console.log(bValor);

function foo(){
    return [1, 2, 3]
}

let arr = foo();

let [a, b, c] = foo();
console.log(a, b, c);

function bar(){
    return {x: 4, y: 5, z: 6}
}

let {x: a, y: b, z: c} = bar();
console.log(a, b, c);