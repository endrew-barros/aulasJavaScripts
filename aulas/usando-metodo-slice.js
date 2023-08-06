
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}
const pessoa = new Pessoa('endrew')
const texto1 = pessoa.nome 
console.log(texto1.slice(0,2))// isso pega a posicao do inicio e fim de quando
console.log(typeof(texto1))