const mySocial = ['Insta, hago, mlbbComunnity']

for(var i = 0; i < mySocial.length; i++) {

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

const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual){

    return numeroAtual * 2;

})

// console.log(dobroDosNumeros);


// Outros métodos


const temperaturas = [10, 20, 30, 40, 50];

const convertidasParaFahrenheit = temperaturas.map(celsius => celsius * 9/5 + 32);
// console.log(convertidasParaFahrenheit); 

const notas = [95, 82, 78, 91, 88];

const notasAprovadas = notas.filter(nota => nota >= 80);
// console.log(notasAprovadas); 


const ages = [22, 34, 28, 40, 55];


const idades = ages.every(function(item) {

    return item => item.ages >= 56
})

console.log(idades)

// const allAdults = ages.every(age => age >= 18);
// console.log(allAdults)   

const precos = [10.99, 25.49, 15.75, 30.00, 8.95];

const custoTotal = precos.reduce((soma, preco) => soma + preco, 0);
// console.log(custoTotal);


const cidades = ['Nova Iorque', 'Los Angeles', 'Chicago', 'Houston'];

const cities = cidades.find(cidade => cidade.length === 6);
// console.log(cities); 




const animais = ['lion', 'elephant', 'giraffe', 'zebra'];

const girafa = animais.findIndex(animal => animal === 'girafa');
