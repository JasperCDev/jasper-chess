"use strict";
var chessSquares = document.querySelectorAll(".ChessSquare");
console.log(chessSquares);
var ChessBoard = /** @class */ (function () {
    function ChessBoard() {
        this.board = this.setUpBoard();
        this.renderBoard();
    }
    ChessBoard.prototype.setUpBoard = function () {
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
    };
    ChessBoard.prototype.renderBoard = function () {
        var _this = this;
        Array.from(chessSquares).forEach(function (square, index) {
            var rowIndex = Math.floor(index / 8);
            var row = _this.board[rowIndex];
            var indx = index % 8;
            if (row[indx] === null) {
                return;
            }
            var img = document.createElement("img");
            img.src = "chessPieces/" + row[indx] + ".png";
            square.appendChild(img);
            console.log("here");
        });
    };
    return ChessBoard;
}());
var chessBoard = new ChessBoard();
