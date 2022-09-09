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
  //
  // the states object is made to maintein some code order
  // when passing arguments to the cellFunctions.js functions
  //
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

  //Effect used to order all pieces at the beggining of the match
  useEffect(() => {
    cell.orderCheckboard(row, column, states);
  }, []);

  //  Made this to toggle al cells from one cell
  const updateBoard = () => {
    board.updater(!board.update);
  };

  //updateBoard
  useEffect(() => {
    cell.cellSelector(states, board, row, column);
    if (row + column == board.cellToDelete) {
      console.log('clean: ', board.cellToDelete);
      states.setPieceKind('')
      board.setCellToDelete('')
    }
  }, [board.update]);

  const delPiece = () => {
    board.setCellToDelete(board.currentCell);
    updateBoard();
  };

  const handleClick = () => {
    if (board.currentCell != row + column) {
      delPiece();
    }
    if (!states.isSelected) {
      if (states.pieceKind != '' && states.pieceColor == board.turn) {
        states.setIsCurrentCell(true);
      } else if (states.pieceKind == '') {
        if (board.currentCell != '' && board.currentPiece != '') {
          cell.spawnPiece(states, board);
        }
      }
      updateBoard();
    } else {
      cell.deselectCell(states.setIsCurrentCell, states.setIsSelected, board);
    }
  };

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
