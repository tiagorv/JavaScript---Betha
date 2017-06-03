class Tarefa{

    constructor(){
        console.log("Tarefa instanciada!");
    }

    mostrarId(){
        console.log(123);
    }

    static carregarTodas(){
        console.log("Carregando todas as tarefas...")
    }
}

console.log(typeof Tarefa);

let tarefa = new Tarefa()

tarefa.mostrarId();
Tarefa.carregarTodas();