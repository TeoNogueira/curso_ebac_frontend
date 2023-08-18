"use strict";

var timesDeFutebol = new Set();
timesDeFutebol.add("Real Madrid");
timesDeFutebol.add("Barcelona");
timesDeFutebol.add("Manchester United");
console.log(timesDeFutebol);
console.log(timesDeFutebol.has("Barcelona"));
console.log(timesDeFutebol.has("Liverpool"));
var jogadoresDeFutebol = new Set();
var jog1 = {
  nome: "Lionel Messi",
  time: "Paris Saint-Germain"
};
var jog2 = {
  nome: "Cristiano Ronaldo",
  time: "Manchester United"
};
jogadoresDeFutebol.add(jog1);
jogadoresDeFutebol.add(jog2);
console.log(jogadoresDeFutebol);

//  SET E MAP

var timesDeFutebol2 = new Set();
timesDeFutebol.add("Real Madrid");
timesDeFutebol.add("Barcelona");
timesDeFutebol.add("Manchester United");
timesDeFutebol.add("Barcelona");
console.log(timesDeFutebol2);
var numerosDeCamisa = new Map();
numerosDeCamisa.set("Cristiano Ronaldo", 7);
numerosDeCamisa.set("Lionel Messi", 10);
numerosDeCamisa.set("Neymar", 10);
console.log(numerosDeCamisa.get("Cristiano Ronaldo"));
console.log(numerosDeCamisa.get("Lionel Messi"));
console.log(numerosDeCamisa.get("Neymar"));