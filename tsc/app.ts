class Tarefa {
    descricao: string;
    concluida: boolean;

    constructor(descricao: string) {
        this.descricao = descricao;
        this.concluida = false;
    }

    toggleConcluida() {
        this.concluida = !this.concluida;
    }
}

class ListaDeTarefas {
    tarefas: Tarefa[];

    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa: Tarefa) {
        this.tarefas.push(tarefa);
    }

    removerTarefa(index: number) {
        this.tarefas.splice(index, 1);
    }

    atualizarTarefa(index: number, tarefa: Tarefa) {
        this.tarefas[index] = tarefa;
    }
}

const corpoDasTarefas = document.querySelector('.tarefas')!;
const inputNovaTarefa = document.querySelector('#nova-tarefa')! as HTMLInputElement;
const botaoAdicionarTarefa = document.querySelector('#adicionar-tarefa')! as HTMLButtonElement;
const listaTarefas = document.querySelector('#lista-tarefas')! as HTMLUListElement;

console.log(inputNovaTarefa, botaoAdicionarTarefa, listaTarefas);