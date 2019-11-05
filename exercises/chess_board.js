let chessboard = "";
let size = 16;
for (let x = 1; x < size; x ++) {
  for (let y = 1; y < size; y++) {
    if ((x + y) % 2 === 0) {
      chessboard += " "
    }
    else {
      chessboard += "#"
    }
  }
  chessboard += "\n"
}
console.log(chessboard)
