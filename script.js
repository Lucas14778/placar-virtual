// Variáveis para armazenar a pontuação
let golsCasa = 0;
let golsFora = 0;

// Capturando os elementos HTML onde os números aparecem
const placarCasaEl = document.getElementById("placar-casa");
const placarForaEl = document.getElementById("placar-fora");

// Função para adicionar gol
function adicionarGol(time) {
    if (time === 'casa') {
        golsCasa++;
        placarCasaEl.textContent = golsCasa;
    } else if (time === 'fora') {
        golsFora++;
        placarForaEl.textContent = golsFora;
    }
}

// Função para remover gol (com trava para não ficar negativo)
function removerGol(time) {
    if (time === 'casa' && golsCasa > 0) {
        golsCasa--;
        placarCasaEl.textContent = golsCasa;
    } else if (time === 'fora' && golsFora > 0) {
        golsFora--;
        placarForaEl.textContent = golsFora;
    }
}

// Função para zerar o placar
function zerarPlacar() {
    golsCasa = 0;
    golsFora = 0;
    placarCasaEl.textContent = golsCasa;
    placarForaEl.textContent = golsFora;
    
    alert("O jogo foi reiniciado!");
}