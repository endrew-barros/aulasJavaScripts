// for(let index = 0; index<10;index++){
//     console.log(index)
// }

const cars = ['Ferrari', 'Tesla', 'Mercedes']

//FORMA TRADICIONAL
// for(let i = 0; i<cars.length; i++){
//     console.log(cars[i])
// }

//FORMA MAIS LEGIVEL
// for(let car of cars){
//     console.log(car)
// }

//UTILIZANDO FOREACH
// cars.forEach(function(car, index){
//     console.log(index)
//     console.log(car)
// })

//USANDO FOR IN O TEMPO DE RESPOSTA EH MAIOR DO QUE AS OUTRAS FUNCOES
const pessoa = {
    name: 'endrew',
    idade: 25
}
/// USANDO EM UMA LISTA
for(i in cars){
    console.log(cars[i])
}

////USANDO EM OBJETOS
console.log('<<<<<<Usando em Objetos>>>>>>>>>')
for(i in pessoa){
    console.log(pessoa[i])
}