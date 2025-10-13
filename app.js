//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let palavra = document.querySelector('p');
//palavra.innerHTML = 'Selecione um número entre 1 e 5000:';
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//let maxTentativas = 5000;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 1000.');
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        exibirTextoNaTela('p', `O número secreto era ${numeroSecreto} e você acertou em ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `Tente um número menor que ${chute}.`);
        } else {
            exibirTextoNaTela('p', `Tente um número maior que ${chute}.`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 1000 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}