const updateTitle = () => document.querySelector('h1').textContent = 'Крестики Нолики на JavaScript!'
const updateCurrentMove = () => document.querySelector('p').innerHTML = `Текущий ход: <span>${Game.move ? 'X' : 'O'}</span>`
const updateWin = () => {
    const win = Game.win
    if (win !== false) {
        console.log('ПОБЕДА', win)
    }
    else {
        const busy = Game.busy
        if (busy) {
            console.log('НИЧЬЯ')
        }
    }
}

const button = (buttonId) => {
    const button = document.getElementById(`${buttonId}`)
    if (button.hasAttribute('disabled')) return

    buttonSetActive(button.id, Game.move ? 'X' : 'O')
    Game.set(...button.id.split('-').map(num => parseInt(num)))

    // console.log(Game.win)
    updateUI()
}

const buttonHTML = (id) => `<button id='${id}' onclick='button("${id}")'></button>`

const buttonSetActive = (id, status) => {
    const button = document.getElementById(id)
    button.removeAttribute('onclick')
    button.textContent = status
    button.setAttribute('disabled', '')
    button.classList.add(`button-${status.toLowerCase()}`)
}

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
    updateCurrentMove()
    updateWin()
}
