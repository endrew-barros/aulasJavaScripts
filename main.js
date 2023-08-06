const subMitButton = document.querySelector('#submit-button')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')

const errorMensagem = document.querySelector('.msg')

const items = document.querySelector('.items')

subMitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const nameValue = nameInput.value
    const emailValue = emailInput.value

    if (nameValue === '' || emailValue === ''){
        errorMensagem.textContent = 'Por favor Preencha os campos abaixo'
        errorMensagem.classList = 'error'
        setTimeout(() => {
            errorMensagem.textContent = ''
            errorMensagem.classList = ''
        },3000);
        return
    }
    const li = document.createElement('li')
    li.classList = 'item'
    li.innerHTML = `Nome: ${nameValue}<br/>email: ${emailValue}` //Dessa forma nao conseguimos pular a linha
    items.appendChild(li) //adiciona os adicionador em li

    nameInput.value = ''
    emailInput.value = ''
})