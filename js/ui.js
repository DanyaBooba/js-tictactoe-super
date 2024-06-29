const updateTitle = () => document.querySelector('h1').textContent = 'Крестики Нолики на JavaScript!'

const button = (buttonId) => {
    const button = document.getElementById(`${buttonId}`)
    console.log(button)
}

const buttonHTML = (id) => `<button id='${id}' onclick='button("${id}")'></button>`

const initField = () => {
    const fieldName = 'field'
    const fieldSize = 3
    const field = document.querySelector(`#${fieldName}`)
    for (let x = 0; x < fieldSize; x++) {
        let div = document.createElement("div")
        div.classList.add("field__item")

        for (let y = 0; y < fieldSize; y++) {
            div.insertAdjacentHTML("beforeend", buttonHTML(`${x}-${y}`))
        }

        field.insertAdjacentHTML("beforeend", div.outerHTML);
    }
}

const updateUI = () => {
    updateTitle()
}
