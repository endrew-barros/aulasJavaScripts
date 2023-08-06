const pessoa = {
    nome :'Endrew',
    sobrenome : 'Barros',
    idade : 25,
    hobbies: ['assistir series', 'jogar brawl','ler'],
    dog:{
        name:'valorian',
        idade: 5
    }
}

// const nome = pessoa.nome
// const sobrenome = pessoa.sobrenome
// const idade = pessoa.idade
// const hobbies = pessoa.hobbies[1]


//destruturação de um objeto, mais eficaz do que esta na linha 8 á 11
const {nome: primeiroNome,sobrenome,idade,hobbies,dog:{name}} = pessoa

console.log(primeiroNome)
console.log(sobrenome)
console.log(idade)
console.log(hobbies)
console.log(pessoa.dog.name)//quando desestruturamos o objeto dog podemos pegar somente o que selecionamos da desestruturção
