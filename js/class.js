class Field {
    constructor(size = 3) {
        this.size = size
        this.field = []

        for (let x = 0; x < size; x++) {
            let list = []
            for (let y = 0; y < size; y++) {
                list.push(-1)
            }
            this.field.push(list)
        }
    }

    get winRow() {
        return false
    }

    get winCol() {
        return false
    }

    get winDiag1() {
        return false
    }

    get winDiag2() {
        return false
    }
}

class TicTacToe {
    constructor(size = 3) {
        this.field = new Field(size)
	}

    get win() {
        const winRow = this.field.winRow
        if (winRow !== -1) return winRow

        const winCol = this.field.winCol
        if(winCol !== -1) return winCol

        const winDiag1 = this.field.winDiag1
        if(winDiag1 !== -1) return winDiag1

        const winDiag2 = this.field.winDiag2
        if (winDiag2 !== -1) return winDiag2

        return false
    }
}

const Game = new TicTacToe()

const isWin = () => Game.win !== false
