import { useState, useEffect, useContext } from 'react';
import '../styles/Cell.css';
import { Piece } from './Piece';
import { boardContext } from './Checkboard';
import { orderCheckboard, handleClassName } from './cellFunctions';

const Cell = ({ row, column }) => {
  const [pieceColor, setPieceColor] = useState('');
  const [pieceKind, setPieceKind] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [isCurrentCell, setIsCurrentCell] = useState(false);

  const {
    setCurrentPiece,
    currentPiece,
    setCurrentPieceColor,
    currentPieceColor,
    setCurrentCell,
    currentCell,
    boardUpdater,
    setBoardUpdater,
    turn,
  } = useContext(boardContext);

  //Pieces starting position
  useEffect(() => {
    orderCheckboard(row, column, setPieceKind, setPieceColor);
  }, []);

  //Clean board when selected other piece
  const updateBoard = () => {
    setBoardUpdater(!boardUpdater);
  };

  useEffect(() => {
    cellSelector();
  }, [boardUpdater]);

  const cellSelector = () => {
    if (!isCurrentCell) {
      setIsSelected(false);
    }
    if (isCurrentCell) {
      setIsSelected(true);
      setCurrentCell(''.concat(row, column));
      setCurrentPiece(pieceKind);
      setCurrentPieceColor(pieceColor);
      setIsCurrentCell(false);
    }
  };

  const spawnPiece = () => {
    setPieceKind(currentPiece);
    setPieceColor(currentPieceColor);
    setCurrentPiece('');
    setCurrentCell('');
    setCurrentPieceColor('');
  };

  const handleClick = () => {
    if (!isSelected) {
      if (pieceKind != '' && pieceColor === turn) {
        setIsCurrentCell(true);
      } else if (pieceKind == '') {
        if (currentCell != '' && currentPiece != '') {
          spawnPiece();
        }
      }
      updateBoard();
    } else {
      setIsCurrentCell(false);
      setIsSelected(false);
    }
  };

  return (
    <div
      className={handleClassName(isSelected, row) + ' r' + row + ' c' + column}
      id={'cell' + column + row}
      onClick={handleClick}
    >
      <span>{column + row}</span>
      <Piece piece={pieceKind} color={pieceColor}></Piece>
    </div>
  );
};

export { Cell };
