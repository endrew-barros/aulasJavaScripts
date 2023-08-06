const names= ['End','Joao','Julia', 'Benedito',false]
const joao = names[1]
console.log(joao)
names[2] = 'Xavier'

// inserir no final de uma lista.
names.push('Afranio')
console.log(names)

//serve para deletar 
// names.shift()

//adicionar no inicio da lista

// names.unshift(20)
// console.log(names)

//remover o ultimo da lista
names.pop()
console.log(names)

//fazer uma busca em uma lista pesquisando pelo nome
console.log(names.indexOf('Julia'))

//lista ordenada
const listaOrdenada = names.sort()
const ehUmaLista = Array.isArray(names)
console.log(listaOrdenada)
console.log(ehUmaLista)