import { useState, useEffect, useContext } from 'react';
import '../styles/Cell.css';
import { Piece } from './Piece';
import { boardContext } from './Checkboard';
import { cell as functions } from './cellFunctions';
const cell = new functions();

const Cell = ({ row, column }) => {
  const [pieceColor, setPieceColor] = useState('');
  const [pieceKind, setPieceKind] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [isCurrentCell, setIsCurrentCell] = useState(false);

  // the states object is made to maintein some code order
  // when passing arguments to the cellFunctions.js functions

  const states = {
    pieceColor,
    setPieceColor,
    setPieceKind,
    pieceKind,
    setPieceKind,
    isSelected,
    setIsSelected,
    isCurrentCell,
    setIsCurrentCell,
  };

  const board = useContext(boardContext);

  const handleClick = () => {
    if (board.currentCell != row + column) {
      cell.deletePiece(board, cell);
    }

    if (states.isSelected) {
      cell.deselectCell(states, board);
      return;
    }

    if (states.pieceKind != '') {
      if (board.currentPiece != states.pieceKind && board.currentPiece != '') {
        states.setPieceKind(board.currentPiece);
      }
      states.setIsCurrentCell(true);
      cell.updateBoard(board);
      return;
    }

    if (states.pieceKind == '' && board.currentPiece != '') {
      cell.spawnPiece(states, board);
      cell.updateBoard(board);
    }
  };

  //updateBoard
  useEffect(() => {
    cell.cellSelector(states, board, row, column);
    if (row + column == board.cellToDelete) {
      states.setPieceKind('');
      board.setCellToDelete('');
    }
  }, [board.update]);

  //Effect used to order all pieces at the beggining of the match
  useEffect(() => {
    cell.orderCheckboard(row, column, states);
  }, []);

  return (
    <div
      className={
        cell.handleClassName(states.isSelected, row) +
        ' r' +
        row +
        ' c' +
        column
      }
      id={'cell' + column + row}
      onClick={handleClick}
    >
      <span>{column + row}</span>
      <Piece piece={states.pieceKind} color={states.pieceColor}></Piece>
    </div>
  );
};

export { Cell };
