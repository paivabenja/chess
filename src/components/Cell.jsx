import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../context/MyContext';
import '../styles/Cell.css';
import { Piece } from './Piece';
import { selectCell } from './cell.js';

const Cell = ({ row, column, boardUpdater, setBoardUpdater, turn }) => {
  const [pieceColor, setPieceColor] = useState();
  const [piece, setPiece] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [isCurrentCell, setIsCurrentCell] = useState(false);

  const { orderCheckboard } = useContext(MyContext);

  //Pieces starting position
  useEffect(() => {
    orderCheckboard(row, column, setPiece, setPieceColor);
  }, []);

  //Clean board when selected other piece
  const updateBoard = () => {
    setBoardUpdater(!boardUpdater);
  };
  useEffect(() => {
    console.log('effect');
    if (!isCurrentCell) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
      setIsCurrentCell(false);
    }
  }, [boardUpdater]);

  const handleClick = () => {
    selectCell(
      isSelected,
      piece,
      pieceColor,
      turn,
      setIsCurrentCell,
      updateBoard,
      setIsSelected,
    );
     
  };

  const handleClassName = (classname) => {
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
