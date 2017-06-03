
function soma(a, b){
    return a + b;
}

let adicao1 = function (a, b){
    return a + b;
}

let adicao2 = (a, b) => a + b;

function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        this.idade++;
    }, 1000);
}

var p = new Pessoa();
