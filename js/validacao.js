function verificaSeChuteEvalido(chute){
    const numero = +chute

    if(notANumber(numero)){
        elementoChute.innerHTML += '<div>Valor inválio</div>';
        return
    }

    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre' ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML =`
        <h2>Você acertou!</h2>
        <h3>O número secreto era: ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn__jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`
    } else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`
    }

}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

function notANumber(numero){
    return Number.isNaN(numero);
}


document.body.addEventListener('click', e => {
    if(e.target.className == 'btn__jogar'){
        window.location.reload()
    }
})