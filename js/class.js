class TicTacToe {
    constructor(size = 3) {
        this.size = size;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                this.array[x][y] = -1;
            }
        }
	}

    get win() {
        return false;
    }
}
