let contadorCliques = [0, 0, 0, 0, 0, 0, 0];

function adicionaBotao(parametro) {
  let botao = document.getElementsByClassName("botao_add")[parametro]
  
  if (contadorCliques[parametro] === 0) {
    botao.style.backgroundColor = "red"
    botao.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'
  }
  
  contadorCliques[parametro]++;
  
  if (contadorCliques[parametro] === 2) {
    botao.style.backgroundColor = ""
    botao.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>Adicionar'
    contadorCliques[parametro] = 0
  }
}

let botao1 = document.getElementsByClassName("botao_add")[0];
botao1.addEventListener("click", function() {
  adicionaBotao(0)
})

let botao2 = document.getElementsByClassName("botao_add")[1];
botao2.addEventListener("click", function() {
  adicionaBotao(1)
})

let botao3 = document.getElementsByClassName("botao_add")[2];
botao3.addEventListener("click", function() {
  adicionaBotao(2)
})

let botao4 = document.getElementsByClassName("botao_add")[3];
botao4.addEventListener("click", function() {
  adicionaBotao(3)
})

let botao5 = document.getElementsByClassName("botao_add")[4];
botao5.addEventListener("click", function() {
  adicionaBotao(4)
})

let botao6 = document.getElementsByClassName("botao_add")[5];
botao6.addEventListener("click", function() {
  adicionaBotao(5)
})

let botao7 = document.getElementsByClassName("botao_add")[6];
botao7.addEventListener("click", function() {
  adicionaBotao(6)
})
