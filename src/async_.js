function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function jogadorRealizaAcao(jogador, acao) {
  return new Promise((resolve, reject) => {
    console.log(`${jogador} está ${acao}`);
    const chanceDeSucesso = Math.random();

    if (chanceDeSucesso > 0.5) {
      esperar(2000).then(() => {
        console.log(`${jogador} ${acao} concluída`);
        resolve();
      });
    } else {
      reject(`${jogador} falhou ao ${acao}`);
    }
  });
}

async function partida() {
  try {
    await jogadorRealizaAcao('Jogador 1', 'atacando a torre');
    await jogadorRealizaAcao('Jogador 2', 'usando habilidade');
    await jogadorRealizaAcao('Jogador 3', 'comprando item');
    await jogadorRealizaAcao('Jogador 1', 'retornando à base');
    console.log('Partida finalizada');
  } catch (erro) {
    console.error('Erro durante a partida:', erro);
  }
}

partida();