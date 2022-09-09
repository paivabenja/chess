class cell {
  spawnPiece = (states, board) => {
    states.setPieceKind(board.currentPiece);
    states.setPieceColor(board.currentPieceColor);
    board.setCurrentPiece('');
    board.setCurrentCell('');
    board.setCurrentPieceColor('');
  };

  cellSelector = (states, board, row, column) => {
    if (!states.isCurrentCell) {
      states.setIsSelected(false);
    }
    if (states.isCurrentCell) {
      states.setIsSelected(true);
      board.setCurrentCell(row + column);
      board.setCurrentPiece(states.pieceKind);
      board.setCurrentPieceColor(states.pieceColor);
      states.setIsCurrentCell(false);
    }
  };

  orderCheckboard = (row, column, states) => {
    switch (row) {
      case 1:
        states.setPieceColor('white');
        switch (column) {
          case 'A':
            states.setPieceKind('rook');
            break;
          case 'B':
            states.setPieceKind('knight');
            break;
          case 'C':
            states.setPieceKind('bishop');
            break;
          case 'D':
            states.setPieceKind('queen');
            break;
          case 'E':
            states.setPieceKind('king');
            break;
          case 'F':
            states.setPieceKind('bishop');
            break;
          case 'G':
            states.setPieceKind('knight');
            break;
          case 'H':
            states.setPieceKind('rook');
            break;
        }
        break;
      case 2:
        states.setPieceColor('white');
        states.setPieceKind('pawn');
        break;
      case 7:
        states.setPieceColor('black');
        states.setPieceKind('pawn');
        break;
      case 8:
        states.setPieceColor('black');
        switch (column) {
          case 'A':
            states.setPieceKind('rook');
            break;
          case 'B':
            states.setPieceKind('knight');
            break;
          case 'C':
            states.setPieceKind('bishop');
            break;
          case 'D':
            states.setPieceKind('queen');
            break;
          case 'E':
            states.setPieceKind('king');
            break;
          case 'F':
            states.setPieceKind('bishop');
            break;
          case 'G':
            states.setPieceKind('knight');
            break;
          case 'H':
            states.setPieceKind('rook');
            break;
        }
        break;
    }
  };

  handleColor = (color) => {
    if (color == 'white') {
      return 'black';
    } else if (color == 'black') {
      return 'white';
    }
  };

  handleClassName = (isSelected, row) => {
    let classname;
    if (isSelected) {
      classname = 'cell selected';
    } else if (!isSelected) {
      classname = 'cell unselected';
    }
    if (row % 2 == 1) {
      classname = classname.concat(' odd');
    } else if (row % 2 == 0) {
      classname = classname.concat(' even');
    }
    return classname;
  };

  deselectCell = (setIsCurrentCell, setIsSelected, board) => {
    setIsCurrentCell(false);
    setIsSelected(false);
    board.setCurrentCell('');
    board.setCurrentPiece('');
    board.setCurrentPieceColor('');
  };

  clean = () => {};
}

export { cell };
