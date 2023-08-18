//  Spread Rest Exercicios

 const heroiOriginal = ['Layla', 'Miya', 'Zilong'];
const heroisCopiados = [...heroiOriginal];
console.log(heroisCopiados);

const timeA = ['Alucard', 'Lylia', 'Esmeralda'];
const timeB = ['Granger', 'Gusion', 'Selena'];
const timeCombinado = [...timeA, ...timeB];
console.log(timeCombinado);


const informacoesOriginal = { nome: 'Natalia', tipo: 'Assassina' };
const informacoesClonadas = { ...informacoesOriginal };
console.log(informacoesClonadas);

function calcularDano(...valoresDeDano) {
  return valoresDeDano.reduce((total, dano) => total + dano, 0);
}
console.log(calcularDano(300, 400, 250));


const [primeiroHerói, segundoHerói, ...restoDosHeróis] =
 ['Lancelot', 'Aldous', 'Kadita', 'Valir', 'Pharsa'];


// console.log(primeiroHerói);

// console.log(segundoHerói);

console.log(restoDosHeróis);


const timeAA = ['Harley', 'Chou'];
const timeBB = ['Kagura', 'Roger', 'Ruby'];

const [jogador1, jogador2, ...restoDosJogadores] = 
[...timeA, ...timeB];

// console.log(jogador1);
// console.log(jogador2);
// console.log(restoDosJogadores);