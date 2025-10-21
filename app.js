// 🎯 Configurações gerais
const config = {
    numeroLimite: 10,
    vozAtiva: true,
    taxaDeVoz: 1.6
};

// 🧮 Variáveis de estado
let numeroSorteado = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// 🚀 Inicialização
inicializarJogo();

function inicializarJogo() {
    exibirMensagemInicial();
    console.log(`Número secreto: ${numeroSecreto}`); // útil para testes
}

// 🗣️ Função de voz separada
function falar(texto) {
    if (config.vozAtiva && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = config.taxaDeVoz;
        window.speechSynthesis.speak(utterance);
    }
}

// 🧾 Exibição centralizada
function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
    falar(texto);
}

// 🧠 Mensagem inicial
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Você está com sorte? Descubra o número secreto!');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${config.numeroLimite}:`);
}

// 🧩 Lógica principal
function verificarChute() {
    const input = document.querySelector('input');
    const chute = Number(input.value);

    // 🔍 Validação de entrada
    if (!chute || chute < 1 || chute > config.numeroLimite) {
        exibirTextoNaTela('p', `⚠️ Digite um número entre 1 e ${config.numeroLimite}.`);
        input.focus();
        return;
    }

    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', `🎉 Você acertou!`);
        const palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        const mensagemTentativas = `O número secreto era ${numeroSecreto}. Você descobriu com ${tentativas} ${palavraTentativas}.`;
        exibirTextoNaTela('p', mensagemTentativas);

        tocarSom('acerto');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        const dica = chute > numeroSecreto ? 'menor' : 'maior';
        exibirTextoNaTela('h1', 'Você não acertou 😢');
        exibirTextoNaTela('p', `O número secreto é ${dica} que ${chute}.`);
        tocarSom('erro');
        tentativas++;
    }

    limparCampo();
}

// 🎲 Geração de número secreto sem repetição
function gerarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * config.numeroLimite) + 1;

    if (numeroSorteado.length === config.numeroLimite) {
        numeroSorteado = [];
    }

    if (numeroSorteado.includes(numero)) {
        return gerarNumeroAleatorio();
    } else {
        numeroSorteado.push(numero);
        return numero;
    }
}

// 🧹 Limpa o campo de input
function limparCampo() {
    const input = document.querySelector('input');
    input.value = '';
    input.focus();
}

// 🔁 Reinicia o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// 🔊 Sons de feedback (acerto/erro)
function tocarSom(tipo) {
    const sons = {
        acerto: 'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg',
        erro: 'https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg'
    };
    const som = new Audio(sons[tipo]);
    som.play().catch(() => {}); // ignora erro caso bloqueado pelo navegador
}
