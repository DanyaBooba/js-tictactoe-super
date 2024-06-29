class Interface {
    constructor() {
        this.initField()
        this.update()
    }

    update() {
        this.updateTitle()
        this.updateCurrentMove()
        this.win()
    }

    win() {
        const win = Game.win
        if (win !== false) win === 1 ? Win.winX() : Win.winO()
        else Game.busy ? Win.draw() : null
    }

    buttonHTML(id) {
        return `<button id='${id}' onclick='button("${id}")'></button>`
    }

    buttonSetActive(id, status) {
        const button = document.getElementById(id)
        button.removeAttribute('onclick')
        button.textContent = status
        button.setAttribute('disabled', '')
        button.classList.add(`button-${status.toLowerCase()}`)
    }

    initField() {
        const fieldName = 'field'
        const fieldSize = 3
        const field = document.querySelector(`#${fieldName}`)
        for (let x = 0; x < fieldSize; x++) {
            let div = document.createElement("div")
            div.classList.add("field__item")

            for (let y = 0; y < fieldSize; y++) {
                div.insertAdjacentHTML("beforeend", this.buttonHTML(`${x}-${y}`))
            }

            field.insertAdjacentHTML("beforeend", div.outerHTML);
        }
    }

    updateTitle() {
        document.querySelector('h1').textContent = 'Крестики Нолики на JavaScript!'
        document.title = 'Крестики Нолики на JavaScript!'
    }

    updateCurrentMove() {
        document.querySelector('p').innerHTML =
            `Текущий ход: <span class="status-${Game.status.toLowerCase()}">${Game.status}</span>`
    }
}
