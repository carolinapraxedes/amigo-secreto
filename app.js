//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []
let nomeAmigo;
let listaAmigos = document.getElementById('listaAmigos')
let resultado = document.getElementById('resultado')

function adicionarAmigo(){
    nomeAmigo = document.getElementById('amigo').value
    if (nomeAmigo == ''){
        alert('Por favor, insira um nome.')
    }else{
        amigos.push(nomeAmigo)
    }
    document.getElementById('amigo').value = '';
    exibirLista();
}

function capitalizarPrimeiraLetra(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function exibirLista(){
    listaAmigos.innerHTML = '';
    amigos.map((amigo,index)=>{
        let itemLista = document.createElement('li');
        itemLista.textContent =  capitalizarPrimeiraLetra(amigo);
        listaAmigos.appendChild(itemLista);
    })
}

function sortearAmigo(){
    let numeroAmigo
    console.log(amigos)
    if(amigos != '') {
        let numeroAmigo = Math.floor(Math.random() * amigos.length);
        listaAmigos.innerHTML = ''
        resultado.innerHTML = `<p>O amigo secreto sorteado é: ${amigos[numeroAmigo]}</p>`
        console.log(amigos[numeroAmigo])
    }else{
        alert('É necessário adicionar amigos para fazer o sorteio')
    }
}