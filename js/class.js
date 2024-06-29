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
        $first = 0;
        for ($i = 0; $i < $this->len; $i++) {
            if ($this->matrix[$i][$i] == 0) {
                return false;
            }

            $first = $first == 0 ? $this->matrix[$i][$i] : $first;

            if ($this->matrix[$i][$i] != $first) {
                return false;
            }
        }

        return [
            "status" => true,
            "win" => $first
        ];
    }

    get winDiag2() {
        $first = 0;
        $i = 0;
        for ($j = $this->len - 1; $j >= 0; $j--) {
            if ($this->matrix[$i][$j] == 0) {
                return false;
            }

            $first = $first == 0 ? $this->matrix[$i][$j] : $first;

            if ($this->matrix[$i][$j] != $first) {
                return false;
            }

            $i += 1;
        }

        return [
            "status" => true,
            "win" => $first
        ];
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

const Game = new TicTacToe()

const isWin = () => Game.win !== false
