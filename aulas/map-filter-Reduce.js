const numbers = [1, 2, 3, 4, 5]

//usando Map
const numberMultiplicadosPor2 = numbers.map(
    function (number) {
        return number * 2
    }
)
console.log(numberMultiplicadosPor2)

//usando o metodo filter para verificar se eh par
const ages = [8, 13, 27, 30, 22, 40]
const idadepar = ages.filter(
    function (ages) {
        return ages % 2 === 0
    }
)
console.log(idadepar)

//fazendo a soma de todo o conteudo inserido em uma lista
const somaIdades = ages.reduce(
    function (age, acumulacao) {
        return acumulacao + age
    }, 0 //isso eh o valor inicial como se fosse a funcao while
)
console.log(somaIdades)

