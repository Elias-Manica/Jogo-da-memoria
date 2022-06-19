let contador = false;
let lista = [
  "bobrossparrot",
  "explodyparrot",
  "fiestaparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];
let elementos;
let numCartas;
let cartasOrdem = [];
let todasCartas;

function iniciarCartas() {
  while (contador !== true) {
    let resposta = prompt("Com quantas cartas você quer jogar?");
    let valor = resposta % 2;
    if (
      Number(resposta) !== 0 &&
      Number(resposta) !== 2 &&
      Number(resposta) <= 14 &&
      valor === 0
    ) {
      contador = true;
      return resposta;
    }
  }
}

function adicionarCartas() {
  for (let i = 0; i < numCartas / 2; i++) {
    cartasOrdem.push(lista[i]);
    cartasOrdem.push(lista[i]);
    embaralharCartas(cartasOrdem);
  }
  for (let j = 0; j < cartasOrdem.length; j++) {
    const qtdCartas = document.querySelector(".caixaComCartas");
    const addCartas = `
    <div class="carta" onclick="aparecerFundo(this)">
        <img class="aparecendo frente" src="./Imagens/front.png" />
        <img
            class="escondido aparecendo resposta"
            src="./Imagens/${cartasOrdem[j]}.gif"
        />
    </div>
    `;
    qtdCartas.innerHTML += addCartas;
  }
}

function verificaSeEstaEmArray(array, nome) {
  return array.includes(nome);
}

function aparecerFundo(elemento) {
  let papa = elemento.querySelector(".frente");
  let traseira = elemento.querySelector(".resposta");
  let qtdAberta = document.querySelectorAll(".aberto");
  if (qtdAberta.length > 1) {
    //verifica se tem 2 cartas abertas
    contarCartasAbertas();
    // if (todasCartas[0].src !== todasCartas[1].src) {
    //   console.log("oi");
    //   let carta1 = document.querySelector(".resposta.aberto");
    //   carta1.classList.add("escondido");
    //   carta1.classList.remove("aberto");
    //   let carta1Frente = document.querySelector(".frente.escondido");
    //   carta1Frente.classList.remove("escondido");
    //   let carta2 = document.querySelector(".resposta.aberto");
    //   carta2.classList.add("escondido");
    //   carta2.classList.remove("aberto");
    //   let carta2Frente = document.querySelector(".frente.escondido");
    //   carta2Frente.classList.remove("escondido");
    // }
    // if (todasCartas[0].src === todasCartas[1].src) {
    //   todasCartas[0].className = "";
    //   todasCartas[1].className = "";
    //   todasCartas = [];
    // }
  }
  papa.classList.add("escondido"); // tira o papagaio
  traseira.classList.remove("escondido"); // aparece a resposta de trás
  traseira.classList.add("aberto"); // adiciona uma classe aberto
}

function contarCartasAbertas() {
  let todasCartas = document.querySelectorAll(".resposta.aberto");
  let carta1 = document.querySelector(".resposta.aberto");

  if (todasCartas[0].src === todasCartas[1].src) {
    todasCartas[0].className = "";
    todasCartas[1].className = "";
    todasCartas[0].parentElement.attributes[1].textContent = "";
    todasCartas[1].parentElement.attributes[1].textContent = "";
  } else {
    todasCartas[0].classList.add("escondido");
    todasCartas[0].classList.remove("aberto");
    todasCartas[1].classList.add("escondido");
    todasCartas[1].classList.remove("aberto");
    console.log("diferentes");
  }
}

function embaralharCartas(array) {
  return array.sort(() => Math.random() - 0.5);
}

function game() {
  numCartas = iniciarCartas();
  embaralharCartas(lista);
  adicionarCartas();
}

game();
