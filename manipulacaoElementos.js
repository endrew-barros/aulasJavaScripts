// FORMA MAIS ANTIGA DE PEGAR E MANIPULAR UM ELEMENTO
// const addUserText = document.getElementById("add-user")
// addUserText.innerText ="Adicionar usuario"

//OUTRA MANEIRA DE PEGAR E MANIPULAR UM ELEMENTO
// const addUserText = document.querySelector('#add-user')
// const myForm = document.querySelector('.item')
// addUserText.textContent = 'Adiocionar User'

//SELECIONAR MULTIIPLOS ELEMENTOS
// const allItens = document.querySelectorAll('.items .item') ////MUUITO RECOMENDAVEL UTILIZAR
// console.log(allItens)


const items = document.querySelector('.items')
const button = document.querySelector('.btn')
// items.remove()

// // items.firstElementChild.remove()
// items.lastElementChild.remove()

items.children[1].textContent = 'Item um'
button.style.background = 'red'