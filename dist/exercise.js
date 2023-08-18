"use strict";

var notaAlunos = [{
  nome: "Tiago",
  nota: 5
}, {
  nome: "Maria",
  nota: 8
}, {
  nome: "Evellyn",
  nota: 10
}, {
  nome: "Erick",
  nota: 7
}, {
  nome: "Jaina",
  nota: 9
}, {
  nome: "Estevão",
  nota: 3
}, {
  nome: "Janette",
  nota: 1
}];
function alunosQuePassouDeAno(aprovados) {
  var alunos = aprovados.filter(function (aprovados) {
    return aprovados.nota >= 6;
  });
  return alunos;
}
console.log(alunosQuePassouDeAno(notaAlunos));