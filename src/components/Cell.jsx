import { useContext, createContext, useState, useEffect } from 'react';
import '../styles/Cell.css';
import { Piece } from './Piece';

const CellContext = createContext();

const Cell = ({ row, column }) => {
  const { piece, setPiece, pieceColor, setPieceColor } =
    useContext(CellContext);

  const handleClick = () => {
    setPiece('queen');
    setPieceColor('black');
  };

  useEffect(() => {
    console.log('effect activated');
  }, []);

  return (
    <div className="cell" id={'cell' + column + row} onClick={handleClick}>
      <span>{column + row}</span>
      <Piece
        thisPiece={piece}
        color={pieceColor}
        position={row + column}
      ></Piece>
    </div>
  );
};

const CellContextProvider = ({ children }) => {
  const [pieceColor, setPieceColor] = useState('white');
  const [piece, setPiece] = useState('empty');

  return (
    <CellContext.Provider
      value={{ pieceColor, setPieceColor, setPiece, piece }}
    >
      {children}
    </CellContext.Provider>
  );
};

export { Cell, CellContextProvider };
