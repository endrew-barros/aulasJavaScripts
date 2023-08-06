//CLASSES E METODOS
class Pessoa{
    constructor(primeiroNome, sobreNome, idade){
        this.primeiroNome = primeiroNome
        this.sobreNome = sobreNome
        this.idade = idade
    }
    getNomeSobrenome(){
        console.log(`${this.primeiroNome} ${this.sobreNome}`)
    }
}
//HERANCAS DA CLASSE PAI
class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} fez uma barulho`)
    }
}
class Dog extends Animal{
    constructor(name){
        super(name)
    }
    speak(){
        console.log(`${this.name} latiu`)
    }
}
const animal = new Animal('Simba')
const dog = new Dog('Bob')

animal.speak()
dog.speak()
// const pessoa = new Pessoa('Endrew','Barros',25)
// console.log(pessoa)
// pessoa.getNomeSobrenome()