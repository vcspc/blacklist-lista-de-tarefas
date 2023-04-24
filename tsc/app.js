"use strict";
class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
        this.concluida = false;
    }
    toggleConcluida() {
        this.concluida = !this.concluida;
    }
}
class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }
    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }
    removerTarefa(index) {
        this.tarefas.splice(index, 1);
    }
    atualizarTarefa(index, tarefa) {
        this.tarefas[index] = tarefa;
    }
}
const corpoDasTarefas = document.querySelector('.tarefas');
const inputNovaTarefa = document.querySelector('#nova-tarefa');
const botaoAdicionarTarefa = document.querySelector('#adicionar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
console.log(inputNovaTarefa, botaoAdicionarTarefa, listaTarefas);
