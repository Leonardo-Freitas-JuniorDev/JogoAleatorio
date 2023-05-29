
const menorValor = 1
const maiorValor = 1000
const aleatorio = gerarNumero();


function gerarNumero(){
    numeroSecreto = parseInt(Math.random() * maiorValor + 1)
}

const elementoMenor = document.getElementById("menor-valor")
elementoMenor.innerHTML = menorValor;
const elementoMaior = document.getElementById("maior-valor")
elementoMaior.innerHTML = maiorValor;