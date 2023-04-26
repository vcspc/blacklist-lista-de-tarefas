class Tarefa {
    descricao: string;
    concluida: boolean;
    estilo: string;

    constructor(descricao: string) {
        this.descricao = descricao;
        this.concluida = false;
	    this.estilo = 'tarefas__tarefa__texto';
    }

    toggleConcluida() {
        this.concluida = !this.concluida;
        this.estilo = this.concluida ? 'tarefas__tarefa__texto--concluida' : 'tarefas__tarefa__texto';
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

let lista = new ListaDeTarefas();
carregarListaTarefas();

botaoAdicionarTarefa.addEventListener('click', () => {
    let descricao = inputNovaTarefa.value;
    let tarefa = new Tarefa(descricao);
    lista.adicionarTarefa(tarefa);
    inputNovaTarefa.value = '';
    salvarListaTarefas();
    atualizarListaTarefas();
});

function salvarListaTarefas(){
	localStorage.setItem('listaTarefas', JSON.stringify(lista.tarefas));
}

function carregarListaTarefas(){
	let listaSalva = localStorage.getItem('listaTarefas');
	if (listaSalva) {
	lista.tarefas = JSON.parse(listaSalva);
	atualizarListaTarefas();
	}
}

function atualizarListaTarefas() {
    listaTarefas.innerHTML = '';
    lista.tarefas.forEach((tarefa, index) => {
        let li = document.createElement('li');
        let tarefaSpan = document.createElement('span');
        tarefaSpan.innerText = tarefa.descricao;
        li.classList.add('tarefas__tarefa');
        tarefaSpan.classList.add(tarefa.estilo);
        tarefaSpan.addEventListener('click', () => {
            tarefa.toggleConcluida();
	        salvarListaTarefas();
            atualizarListaTarefas();
        });
        li.appendChild(tarefaSpan);
        let botaoRemover = document.createElement('button');
        let icon = document.createElement('i');
        /* botaoRemover.innerText = '<i class="fa-regular fa-trash-can fa-sm"></i>'; */
        botaoRemover.classList.add('tarefas__tarefa__excluir');
        icon.classList.add('fa-regular', 'fa-trash-can', 'fa-sm');
        botaoRemover.addEventListener('click', () => {
            lista.removerTarefa(index);
	        salvarListaTarefas();
            atualizarListaTarefas();
        });
        li.appendChild(botaoRemover);
        botaoRemover.appendChild(icon);
        listaTarefas.appendChild(li);
    });
}
