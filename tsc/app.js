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
let lista = new ListaDeTarefas();
botaoAdicionarTarefa.addEventListener('click', () => {
    let descricao = inputNovaTarefa.value;
    let tarefa = new Tarefa(descricao);
    lista.adicionarTarefa(tarefa);
    inputNovaTarefa.value = '';
    atualizarListaTarefas();
});
function atualizarListaTarefas() {
    listaTarefas.innerHTML = '';
    lista.tarefas.forEach((tarefa, index) => {
        let li = document.createElement('li');
        let tarefaSpan = document.createElement('span');
        tarefaSpan.innerText = tarefa.descricao;
        tarefaSpan.classList.add('tarefas__tarefa__texto');
        tarefaSpan.addEventListener('click', () => {
            tarefa.toggleConcluida();
            atualizarListaTarefas();
        });
        li.appendChild(tarefaSpan);
        let botaoRemover = document.createElement('button');
        botaoRemover.innerText = '<i class="fa-regular fa-trash-can fa-sm"></i>';
        botaoRemover.classList.add('tarefas__tarefa__acao__excluir');
        botaoRemover.addEventListener('click', () => {
            lista.removerTarefa(index);
            atualizarListaTarefas();
        });
        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
    });
}
