class cell {
  deselectCell = (states, board) => {
    states.setIsCurrentCell(false);
    states.setIsSelected(false);
    board.setCurrentCell("");
    board.setCurrentPiece("");
    board.setCurrentPieceColor("");
  };

  spawnPiece = (states, board) => {
    board.setCurrentCell("");
    states.setPieceKind(board.currentPiece);
    states.setPieceColor(board.currentPieceColor);
    board.setCurrentPiece("");
    board.setCurrentPieceColor("");
    states.setIsSelected(false);
    board.updater(!board.update);
  };

  deletePiece = (board) => {
    board.setCellToDelete(board.currentCell);
    board.updater(!board.update);
  };

  cellSelector = (states, board, row, column) => {
    if (!states.isCurrentCell) {
      states.setIsSelected(false);
      return;
    }
    if (row + column == board.currentCell) {
      states.setIsSelected(false);
      board.setCurrentCell(row + column);
      board.setCurrentPiece(states.pieceKind);
      board.setCurrentPieceColor(states.pieceColor);
      states.setIsCurrentCell(false);
      return;
    }
    states.setIsSelected(true);
    board.setCurrentCell(row + column);
    board.setCurrentPiece(states.pieceKind);
    board.setCurrentPieceColor(states.pieceColor);
    states.setIsCurrentCell(false);

    console.log(states.isCurrentCell);
  };

  orderCheckboard = (row, column, states) => {
    switch (row) {
      case 1:
        states.setPieceColor("white");
        switch (column) {
          case "A":
            states.setPieceKind("rook");
            break;
          case "B":
            states.setPieceKind("knight");
            break;
          case "C":
            states.setPieceKind("bishop");
            break;
          case "D":
            states.setPieceKind("queen");
            break;
          case "E":
            states.setPieceKind("king");
            break;
          case "F":
            states.setPieceKind("bishop");
            break;
          case "G":
            states.setPieceKind("knight");
            break;
          case "H":
            states.setPieceKind("rook");
            break;
        }
        break;
      case 2:
        states.setPieceColor("white");
        states.setPieceKind("pawn");
        break;
      case 7:
        states.setPieceColor("black");
        states.setPieceKind("pawn");
        break;
      case 8:
        states.setPieceColor("black");
        switch (column) {
          case "A":
            states.setPieceKind("rook");
            break;
          case "B":
            states.setPieceKind("knight");
            break;
          case "C":
            states.setPieceKind("bishop");
            break;
          case "D":
            states.setPieceKind("queen");
            break;
          case "E":
            states.setPieceKind("king");
            break;
          case "F":
            states.setPieceKind("bishop");
            break;
          case "G":
            states.setPieceKind("knight");
            break;
          case "H":
            states.setPieceKind("rook");
            break;
        }
        break;
    }
  };

  handleClassName = (isSelected, row) => {
    let classname;
    if (isSelected) {
      classname = "cell selected";
    } else if (!isSelected) {
      classname = "cell unselected";
    }
    if (row % 2 == 1) {
      classname = classname.concat(" odd");
    } else if (row % 2 == 0) {
      classname = classname.concat(" even");
    }
    return classname;
  };
}

export { cell };
