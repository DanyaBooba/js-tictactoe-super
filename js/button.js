const button = (buttonId) => {
    const button = document.getElementById(`${buttonId}`)
    if (button.hasAttribute('disabled')) return

    UI.buttonSetActive(button.id, Game.status)
    Game.set(...button.id.split('-').map(num => parseInt(num)))
    UI.update()
}
