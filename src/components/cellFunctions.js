const orderCheckboard = (row, column, setPiece, setPieceColor) => {
  switch (row) {
    case 1:
      setPieceColor('white');
      switch (column) {
        case 'A':
          setPiece('rook');
          break;
        case 'B':
          setPiece('knight');
          break;
        case 'C':
          setPiece('bishop');
          break;
        case 'D':
          setPiece('queen');
          break;
        case 'E':
          setPiece('king');
          break;
        case 'F':
          setPiece('bishop');
          break;
        case 'G':
          setPiece('knight');
          break;
        case 'H':
          setPiece('rook');
          break;
      }
      break;
    case 2:
      setPieceColor('white');
      setPiece('pawn');
      break;
    case 7:
      setPieceColor('black');
      setPiece('pawn');
      break;
    case 8:
      setPieceColor('black');
      switch (column) {
        case 'A':
          setPiece('rook');
          break;
        case 'B':
          setPiece('knight');
          break;
        case 'C':
          setPiece('bishop');
          break;
        case 'D':
          setPiece('queen');
          break;
        case 'E':
          setPiece('king');
          break;
        case 'F':
          setPiece('bishop');
          break;
        case 'G':
          setPiece('knight');
          break;
        case 'H':
          setPiece('rook');
          break;
      }
      break;
  }
};

const handleColor = (color) => {
  if (color == 'white') {
    return 'black';
  } else if (color == 'black') {
    return 'white';
  }
};

const handleTurns = (color) => {
  let nextColor = handleColor(color);
  if (nextPlayer == color) {
    setNextPlayer(nextColor);
    return true;
  } else {
    return false;
  }
};

const handleClassName = (isSelected, row) => {
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

export {handleClassName, orderCheckboard}
