const submitButton = document.querySelector('#submit-button')
const myForm = document.querySelector('#my-form')
const nomeInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')

const items = document.querySelector('.items')

submitButton.addEventListener("click", function (evento) {
    evento.preventDefault() //vai retirar o evento padrao
    // console.log('cliked')
    const nomeValue = nomeInput.value
    const emailValue = emailInput.value
    // console.log(nomeInput)

    if(nomeValue === ''|| emailValue === ''){
        return alert('Por favor preencha todos os campos')
    }

    myForm.style.background = "red"
    items.firstElementChild.textContent = nomeValue
    items.children[1].textContent = emailValue
})