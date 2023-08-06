const todos = [
    {
        id: 1,
        description:"enviar",
        isComplet: false
    },
    {
        id:2,
        description: "ler",
        isComplet: true
    },
    {
        id:3,
        description:"Treinar",
        isComplet: true
    }
]
const pegarValor = todos[2].description
console.log(pegarValor)

const todosJson = JSON.stringify(todos)
const todosList  = JSON.parse(todosJson)

console.log(todosList)