const sum = 1+1

//if(sum === 2){
    //     console.log('Soma eh 2')
    // }
    // else if(sum === 3){
    //     console.log(`soma eh ${sum}`)
    // }

//MESMA COISA DO QUE DE CIMA
let number = sum === 2 ? console.log(`A soma eh igual a ${sum}`) : console.log('a soma eh diferente de 2')

// if(sum === 2){
//     console.log('Soma eh 2')
// }
// else if(sum === 3){
//     console.log(`soma eh ${sum}`)
// }
// else{
//     console.log(`a soma não corresponde á 2`)
// }
const car = 'Tesla'

switch(car){
    case 'Mercedes':
        console.log(`${car} eh muito bom`)
        break
    case 'Ferrari':
        console.log(`${car} eh o melhor`)
        break
    case 'Tesla':
        console.log(`${car} eh top`)
}

const oa = ''
console.log(!!oa)