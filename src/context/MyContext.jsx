import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const orderCheckboard = (row, column, setPiece, setPieceColor) => {
    switch (row) {
      case 1:
        setPieceColor('white');
        switch (column) {
          case 'A':
            setPiece('tower');
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
            setPiece('tower');
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
            setPiece('tower');
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
            setPiece('tower');
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

  const [nextPlayer, setNextPlayer] = useState('white');
  const handleTurns = (color) => {
    let nextColor = handleColor(color);
    if (nextPlayer == color) {
      setNextPlayer(nextColor);
      return true;
    } else {
      return false;
    }
  };

  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];

  const cleanSelection = (row, column) => {
    let clean = false;
    rows.map((arrayRow) => {
      columns.map((arrayColumn) => {
        if (row == arrayRow && column == arrayColumn) {
          console.log('return true');
          clean = true;
        } 
      });
    });
    return clean;
  };

  return (
    <MyContext.Provider
      value={{
        columns,
        rows,
        handleTurns,
        nextPlayer,
        cleanSelection,
        orderCheckboard,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
