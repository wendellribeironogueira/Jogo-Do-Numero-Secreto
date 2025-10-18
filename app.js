let numeroLimite = 10;
let numeroSorteado = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log (numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.7; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Você Está com Sorte? Descubra o Número Secreto!');
    exibirTextoNaTela('p', 'Escolha um Número Entre 1 e 10:');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', `Você Acertou! O Número Secreto é ${numeroSecreto}`);
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você Descobriu o Número Secreto com ${tentativas} ${palavraTentativas}!`; 
                exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela ('h1', 'Você Não Acertou!');
        exibirTextoNaTela ('p', 'O Número Secreto é Menor que o Chute!');
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela ('h1', 'Você Não Acertou!');
        exibirTextoNaTela ('p', 'O Número Secreto é Maior que o Chute!');
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio (){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosLista = numeroSorteado.length;

    if (quantidadeDeElementosLista == numeroLimite) {
        numeroSorteado = [];
    }
    if (numeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute ('disabled', true);
}

