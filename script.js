let contador = false;
let numCartas = iniciarCartas();
adicionarCartas();

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
  for (let i = 0; i < numCartas; i++) {
    const qtdCartas = document.querySelector(".caixaComCartas");
    const addCartas = `
        <div class="carta"></div>
    `;
    qtdCartas.innerHTML += addCartas;
  }
}
