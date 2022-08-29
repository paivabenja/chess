import { useState, useEffect } from 'react';
import '../styles/Cell.css';
import { Piece } from './Piece';

const Cell = ({ row, column }) => {
  const [pieceColor, setPieceColor] = useState('');
  const [piece, setPiece] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (!isSelected && piece === '') {
      setIsSelected(true)
    } else if (!isSelected && piece !== '') {
      setPiece('');
    }
  };

  //re order checkboard
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

  return (
    <div className="cell" id={'cell' + column + row} onClick={handleClick}>
      <span>{column + row}</span>
      <Piece
        piece={piece}
        color={pieceColor}
      ></Piece>
    </div>
  );
};

export { Cell };
