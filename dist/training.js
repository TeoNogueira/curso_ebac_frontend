"use strict";

var mySocial = ['Insta, hago, mlbbComunnity'];
for (var i = 0; i < mySocial.length; i++) {

  // console.log(`Minhas redes sociais: ${mySocial[i]}`);
}

// mySocial.forEach(function(nameSocial, i) {

// // console.log(` Meu perfil na rede social: ${nameSocial}`);
// })

// const alunos = ['Teo', 'Julia', 'Paula', 'Wagner']

// alunos.map(function(){

//     itemAtual = {

//         nome: itemAtual,
//         curso: 'Frontend',
//     }
// });

// console.log(alunos)

var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});

// console.log(dobroDosNumeros);

// Outros métodos

var temperaturas = [10, 20, 30, 40, 50];
var convertidasParaFahrenheit = temperaturas.map(function (celsius) {
  return celsius * 9 / 5 + 32;
});
// console.log(convertidasParaFahrenheit); 

var notas = [95, 82, 78, 91, 88];
var notasAprovadas = notas.filter(function (nota) {
  return nota >= 80;
});
// console.log(notasAprovadas); 

var ages = [22, 34, 28, 40, 55];
var idades = ages.every(function (item) {
  return function (item) {
    return item.ages >= 56;
  };
});
console.log(idades);

// const allAdults = ages.every(age => age >= 18);
// console.log(allAdults)   

var precos = [10.99, 25.49, 15.75, 30.00, 8.95];
var custoTotal = precos.reduce(function (soma, preco) {
  return soma + preco;
}, 0);
// console.log(custoTotal);

var cidades = ['Nova Iorque', 'Los Angeles', 'Chicago', 'Houston'];
var cities = cidades.find(function (cidade) {
  return cidade.length === 6;
});
// console.log(cities); 

var animais = ['lion', 'elephant', 'giraffe', 'zebra'];
var girafa = animais.findIndex(function (animal) {
  return animal === 'girafa';
});