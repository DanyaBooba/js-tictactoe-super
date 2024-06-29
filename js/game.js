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

    set(x, y, status) {
        if (this.field[y][x] === -1) {
            this.field[y][x] = status
        }
    }

    print() {
        console.log(this.field)
    }

    get fieldBusy() {
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                if(this.field[x][y] === -1) return false
            }
        }
        return true
    }

    get winRow() {
        for (let x = 0; x < this.size; x++) {
            let [flag, firstElement] = [true, -1]
            for (let y = 0; y < this.size; y++) {
                if (this.field[y][x] === -1) {
                    flag = false
                    break
                }
                firstElement = firstElement === -1 ? this.field[y][x] : firstElement
                if (this.field[y][x] !== firstElement) {
                    flag = false
                    break
                }
            }
            if(flag) return firstElement
        }
        return false
    }

    get winCol() {
        for (let x = 0; x < this.size; x++) {
            let [flag, firstElement] = [true, -1]
            for (let y = 0; y < this.size; y++) {
                if (this.field[x][y] === -1) {
                    flag = false
                    break
                }
                firstElement = firstElement === -1 ? this.field[x][y] : firstElement
                if (this.field[x][y] !== firstElement) {
                    flag = false
                    break
                }
            }
            if(flag) return firstElement
        }
        return false
    }

    get winDiag1() {
        let firstElement = -1
        for (let x = 0; x < this.size; x++) {
            if (this.field[x][x] === -1) return false
            firstElement = firstElement === -1 ? this.field[x][x] : firstElement;
            if (this.field[x][x] !== firstElement) return false
        }

        return firstElement
    }

    get winDiag2() {
        let firstElement = -1
        for (let y = this.size - 1,  x = 0; y >= 0; y--, x++) {
            if (this.field[x][y] === -1) return false
            firstElement = firstElement === -1 ? this.field[x][y] : firstElement
            if (this.field[x][y] !== firstElement) return false
        }

        return firstElement
    }
}

class TicTacToe {
    constructor(size = 3) {
        this.field = new Field(size)
        this.move = Math.floor(Math.random() * 2);
	}

    set(x, y) {
        this.field.set(x, y, this.move)
        this.move = this.move == 0 ? 1 : 0
    }

    get busy() {
        return this.field.fieldBusy
    }

    get status() {
        return this.move ? 'X' : 'O'
    }

    get win() {
        const winRow = this.field.winRow
        if (winRow !== false) return winRow

        const winCol = this.field.winCol
        if(winCol !== false) return winCol

        const winDiag1 = this.field.winDiag1
        if(winDiag1 !== false) return winDiag1

        const winDiag2 = this.field.winDiag2
        if (winDiag2 !== false) return winDiag2

        return false
    }
}
