class InterfaceWin {
    winX() {
        const win = this.showWin()
        win.innerHTML = this.winHTML('Крестиком', 'x')
    }

    winO() {
        const win = this.showWin()
        win.innerHTML = this.winHTML('Ноликом', 'o')
    }

    draw() {
        const win = this.showWin()
        win.innerHTML = this.drawHTML()
    }

    showWin() {
        const win = document.getElementById('win')
        win.classList.remove('display-none')
        return win
    }

    winHTML(nameWin, status) {
        return this.HTML(`Победа за ${nameWin}!`, status)
    }

    drawHTML() {
        return this.HTML('Ничья', 'draw')
    }

    HTML(text, status) {
        return `<div class="win__content win__content-${status}">
                    <h2>${text}</h2>
                    <button onclick="location.reload()">
                        Начать игру заново
                    </button>
                </div>`
    }

}
