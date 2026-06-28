// Lista de seleções participantes
const selecoes = [
    "Brasil 🇧🇷", "Argentina 🇦🇷", "França 🇫🇷", 
    "Alemanha 🇩🇪", "Espanha 🇪🇸", "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿", 
    "Portugal 🇵🇹", "Holanda 🇳🇱", "Itália 🇮🇹", "Uruguai 🇺🇾",
    "Croácia 🇭🇷", "Bélgica 🇧🇪", "Colômbia 🇨🇴", "Senegal 🇸🇳"
];

// Capturando os elementos do HTML
const btnSortear = document.getElementById("btn-sortear");
const resultadoDiv = document.getElementById("resultado");
const nomeSelecao = document.getElementById("nome-selecao");

// Criando o evento de clique no botão
btnSortear.addEventListener("click", () => {
    // Gera um número aleatório entre 0 e o tamanho da lista de seleções
    const indiceSorteado = Math.floor(Math.random() * selecoes.length);
    
    // Atualiza o texto do HTML com o nome da seleção sorteada
    nomeSelecao.textContent = selecoes[indiceSorteado];
    
    // Remove a classe que oculta a div e adiciona a que deixa visível
    resultadoDiv.classList.remove("resultado-oculto");
    resultadoDiv.classList.add("resultado-visivel");
});