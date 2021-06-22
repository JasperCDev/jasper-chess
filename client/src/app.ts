const chessSquares = document.querySelectorAll(".ChessSquare");
console.log(chessSquares);

class ChessBoard {
  board: Array<Array<string | null>>;

  constructor() {
    this.board = this.setUpBoard();
    this.renderBoard();
  }

  setUpBoard(): Array<Array<string | null>> {
    return [
      ["r-black", "n-black", "b-black", "q-black", "k-black", "b-black", "n-black", "r-black"],
      ["p-black", "p-black", "p-black", "p-black", "p-black", "p-black", "p-black", "p-black"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["p-white", "p-white", "p-white", "p-white", "p-white", "p-white", "p-white", "p-white"],
      ["r-white", "n-white", "b-white", "q-white", "k-white", "b-white", "n-white", "r-white"]
    ];
  }

  renderBoard(): void {
    Array.from(chessSquares).forEach((square, index) => {
      let rowIndex = Math.floor(index / 8);
      const row = this.board[rowIndex];
      const indx = index % 8;
        if (row[indx] === null) {
          return;
        }
        const img = document.createElement("img");
        img.src = `chessPieces/${row[indx]}.png`;
        square.appendChild(img);
        console.log("here");
    });
  }

}

const chessBoard = new ChessBoard();