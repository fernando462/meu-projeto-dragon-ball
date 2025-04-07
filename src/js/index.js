// Função para remover a seleção de qualquer botão ou personagem já selecionado
function removerSelecao(elemento, classe) {
  const elementoSelecionado = document.querySelector(`.${classe}`);
  if (elementoSelecionado) {
    elementoSelecionado.classList.remove(classe);
  }
}

// Função para adicionar a seleção ao botão ou personagem
function adicionarSelecao(elemento, classe) {
  elemento.classList.add(classe);
}

// Função para lidar com a seleção do botão
function selecionarBotao(botao) {
  // Remove a seleção de outros botões
  removerSelecao(botao, "selecionado");
  
  // Adiciona a seleção ao botão clicado
  adicionarSelecao(botao, "selecionado");
}

// Função para lidar com a seleção do personagem
function selecionarPersonagem(indice) {
  // Remove a seleção de outros personagens
  removerSelecao(document.querySelector(".personagem"), "selecionado");
  
  // Adiciona a seleção ao personagem correspondente
  adicionarSelecao(personagens[indice], "selecionado");
}

// Função principal que define o comportamento ao clicar no botão
function configurarBotoes() {
  botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
      selecionarBotao(botao); // Seleciona o botão clicado
      selecionarPersonagem(indice); // Seleciona o personagem correspondente
    });
  });
}

// Seletores dos botões e personagens
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Chama a função para configurar os botões
configurarBotoes();