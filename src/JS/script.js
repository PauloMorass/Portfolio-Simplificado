// comentárioss
/* - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe "ativo" nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele */


  /* - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html  */

  //Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

let botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos')
// busca todos os elementos que tem essa .class
let projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')


// adicionando uma escuta quando eu clicar no botao
botaoMostrarProjetos.addEventListener('click', () => {
  // para cada projetoInativo vou pegar outro projetoInativo
  mostrarMaisProjetos()

  //adicionou uma nova class para remover o botao
  esconderBotao()

  // refatorar o código *melhorar o código: deixar ele com menos linhas, ler melhor o que está acontecendo*
})

function esconderBotao() {
botaoMostrarProjetos.classList.add('remover')
}

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetosInativos => {
    //adicionou uma nova classe dentro dos projetos
    projetosInativos.classList.add('ativo')
  })
}
