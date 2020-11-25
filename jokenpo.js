const $campo1Jogador1 = document.querySelector('.campinho-1-jogador-1');
const $campo2Jogador1 = document.querySelector('.campinho-2-jogador-1');
const $campo3Jogador1 = document.querySelector('.campinho-3-jogador-1');
const $campoJogada1 = document.querySelector('.campo-jogada-1');
const $campo1Jogador2 = document.querySelector('.campinho-1-jogador-2');
const $campo2Jogador2 = document.querySelector('.campinho-2-jogador-2');
const $campo3Jogador2 = document.querySelector('.campinho-3-jogador-2');
const $campoJogada2 = document.querySelector('.campo-jogada-2');
const $placarJogador1 = document.querySelector('.campo-jogador-1');
const $placarJogador2 = document.querySelector('.campo-jogador-2');
const $campoVencedor = document.querySelector('.campo-vencedor');
const $campos = document.querySelectorAll('.campo')
const $placares = document.querySelectorAll('.campo-pontos')


let jogadaJogador1 = '';
let jogadaJogador2 = '';

let vencedor = null ;


let pontoJogador1 = 0;
let pontoJogador2 = 0;

const minNumeroAleatorio = 0;
const maxNumeroAleatorio = 2;



$campo1Jogador1.addEventListener('click', function(){
    jogadaJogador1 = 'papel';
    if (vencedor != null) {
        adicionaPonto()
    }
    verificaCampeao();
    $campoJogada1.innerHTML = '<img src="images/papel_jogador-1.png">';
    jogadaBot()
});

$campo2Jogador1.addEventListener('click', function(){
    jogadaJogador1 = 'pedra';
    if (vencedor != null) {
        adicionaPonto()
    }
    verificaCampeao();
    $campoJogada1.innerHTML = '<img src="images/pedra_jogador-1.png">';
    jogadaBot()
});

$campo3Jogador1.addEventListener('click', function(){
    jogadaJogador1 = 'tesoura';
    if (vencedor != null) {
        adicionaPonto()
    }
    verificaCampeao();
    $campoJogada1.innerHTML = '<img src="images/tesoura_jogador-1.png">';
    jogadaBot()
});


function verificaVencedor(){
    if(jogadaJogador1 == jogadaJogador2){
        $campoVencedor.innerHTML = 'Empatou'
        return vencedor = 0;
    }
    if(jogadaJogador1 == 'papel' && jogadaJogador2 == 'pedra'){
        vencedor = 1;
        pontoJogador1 = pontoJogador1 + 1;
        $campoVencedor.innerHTML = 'Jogador 1 venceu'
    }
    if(jogadaJogador1 == 'papel' && jogadaJogador2 == 'tesoura'){
        vencedor = 2;
        pontoJogador2 = pontoJogador2 + 1;
        $campoVencedor.innerHTML = 'Jogador 2 venceu'
    }
    if(jogadaJogador1 == 'pedra' && jogadaJogador2 == 'papel'){
        vencedor = 2;
        pontoJogador2 = pontoJogador2 + 1;
        $campoVencedor.innerHTML = 'Jogador 2 venceu'
    }
    if(jogadaJogador1 == 'pedra' && jogadaJogador2 == 'tesoura'){
        vencedor = 1;
        pontoJogador1 = pontoJogador1 + 1;
        $campoVencedor.innerHTML = 'Jogador 1 venceu'
    }
    if(jogadaJogador1 == 'tesoura' && jogadaJogador2 == 'papel'){
        vencedor = 1;
        pontoJogador1 = pontoJogador1 + 1;
        $campoVencedor.innerHTML = 'Jogador 1 venceu'
    }
    if(jogadaJogador1 == 'tesoura' && jogadaJogador2 == 'pedra'){
        vencedor = 2;
        pontoJogador2 = pontoJogador2 + 1;
        $campoVencedor.innerHTML = 'Jogador 2 venceu'
    }
}

function adicionaPonto(){
    $placarJogador1.innerHTML = pontoJogador1;
    $placarJogador2.innerHTML = pontoJogador2;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jogadaBot(){
    const numeroAletorio = getRandomInt(minNumeroAleatorio, maxNumeroAleatorio)
   if(numeroAletorio == 0){
    jogadaJogador2 = 'papel';
    verificaVencedor();
    if (vencedor != null) {
        adicionaPonto()
    }
    verificaCampeao();
    $campoJogada2.innerHTML = '<img src="images/papel_jogador-1.png">';
   }
   if(numeroAletorio == 1){
    jogadaJogador2 = 'pedra';
    verificaVencedor();
    if (vencedor != null) {
        adicionaPonto()
    }
    verificaCampeao();
    $campoJogada2.innerHTML = '<img src="images/pedra_jogador-1.png">';
   }
   if(numeroAletorio == 2){
    jogadaJogador2 = 'tesoura';
    verificaVencedor();
    if (vencedor != null) {
        adicionaPonto()
    }
    verificaCampeao();
    $campoJogada2.innerHTML = '<img src="images/tesoura_jogador-1.png">';
   }
}

function verificaCampeao(){
    if($placarJogador1.textContent == '15'){
        $campoVencedor.innerHTML = 'jogador 1 campeão'
        limpaPlacar()
    }
    if($placarJogador2.textContent == '15'){
        $campoVencedor.innerHTML = 'jogador 2 campeão'
        limpaPlacar()
    }
}


function limpaPlacar(){
    for (const placar of $placares) {
        placar.textContent = '0';
    }
    pontoJogador1 = 0;
    pontoJogador2 = 0;
}