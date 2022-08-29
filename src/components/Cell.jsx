import { useState, useEffect } from 'react';
import '../styles/Cell.css';
import { Piece } from './Piece';

const Cell = ({ row, column, handleSelection }) => {
  //useEffect
  useEffect(() => {
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
  }, []);

  const [pieceColor, setPieceColor] = useState('');
  const [piece, setPiece] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (!isSelected) {
      setIsSelected(true);
    } else if (isSelected) {
      setIsSelected(false);
    }
    handleSelection();
  };

  const handleClassName = (classname = '') => {
    if (isSelected) {
      classname = 'cell selected';
    } else if (!isSelected) {
      classname = 'cell unselected';
    }
    if (row % 2 == 1) {
      classname = classname.concat(' odd');
    } else if (row % 2 == 0){
      classname = classname.concat(' even')
    }
    return classname;
  };

  return (
    <div
      className={handleClassName() + ' r' + row + ' c' + column}
      id={'cell' + column + row}
      onClick={handleClick}
    >
      <span>{column + row}</span>
      <Piece piece={piece} color={pieceColor}></Piece>
    </div>
  );
};

export { Cell };
