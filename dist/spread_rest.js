"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//  Spread Rest Exercicios

var heroiOriginal = ['Layla', 'Miya', 'Zilong'];
var heroisCopiados = [].concat(heroiOriginal);
console.log(heroisCopiados);
var timeA = ['Alucard', 'Lylia', 'Esmeralda'];
var timeB = ['Granger', 'Gusion', 'Selena'];
var timeCombinado = [].concat(timeA, timeB);
console.log(timeCombinado);
var informacoesOriginal = {
  nome: 'Natalia',
  tipo: 'Assassina'
};
var informacoesClonadas = _objectSpread({}, informacoesOriginal);
console.log(informacoesClonadas);
function calcularDano() {
  for (var _len = arguments.length, valoresDeDano = new Array(_len), _key = 0; _key < _len; _key++) {
    valoresDeDano[_key] = arguments[_key];
  }
  return valoresDeDano.reduce(function (total, dano) {
    return total + dano;
  }, 0);
}
console.log(calcularDano(300, 400, 250));
var primeiroHerói = 'Lancelot',
  segundoHerói = 'Aldous',
  restoDosHeróis = ['Kadita', 'Valir', 'Pharsa'];

// console.log(primeiroHerói);

// console.log(segundoHerói);

console.log(restoDosHeróis);
var timeAA = ['Harley', 'Chou'];
var timeBB = ['Kagura', 'Roger', 'Ruby'];
var _ref = [].concat(timeA, timeB),
  jogador1 = _ref[0],
  jogador2 = _ref[1],
  restoDosJogadores = _ref.slice(2);

// console.log(jogador1);
// console.log(jogador2);
// console.log(restoDosJogadores);