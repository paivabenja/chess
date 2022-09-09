import '../styles/Checkboard.css';
import { createContext, React, useState } from 'react';
import { Cell } from './Cell';

const boardContext = createContext();

const Checkboard = () => {
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <BoardContextProvider>
      <div className="checkboard">
        {rows.map((row, i) =>
          columns.map((column, j) => {
            return <Cell key={(i, j)} row={row} column={column}></Cell>;
          }),
        )}
      </div>
    </BoardContextProvider>
  );
};

const BoardContextProvider = ({ children }) => {
  const [update, updater] = useState(true);
  const [turn, setTurn] = useState('white');
  //const [nextPlayer, setNextPlayer] = useState('white');
  const [currentCell, setCurrentCell] = useState('');
  const [currentPiece, setCurrentPiece] = useState('');
  const [currentPieceColor, setCurrentPieceColor] = useState('');
  const [cellToDelete, setCellToDelete] = useState('');

  return (
    <boardContext.Provider
      value={{
        setCurrentPiece,
        currentPiece,
        setCurrentPieceColor,
        currentPieceColor,
        setCurrentCell,
        currentCell,
        updater,
        update,
        cellToDelete,
        setCellToDelete,
        turn,
      }}
    >
      {children}
    </boardContext.Provider>
  );
};
export { Checkboard, boardContext };
