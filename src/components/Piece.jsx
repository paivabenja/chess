import { Circle } from './Circle';
import '../styles/Piece.css';

const Piece = ({ piece, color }) => {
  switch (piece) {
    case 'circle':
      return <Circle color="black"></Circle>;
    case 'red-circle':
      return <Circle color="red"></Circle>;
    case '':
      return;
  }
  switch (color) {
    case 'black':
      switch (piece) {
        case 'king':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png" />
            </div>
          );
        case 'queen':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png" />
            </div>
          );
        case 'rook':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png" />
            </div>
          );
        case 'knight':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png" />
            </div>
          );
        case 'bishop':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png" />
            </div>
          );
        case 'pawn':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png" />
            </div>
          );
      }
    case 'white':
      switch (piece) {
        case 'king':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png" />
            </div>
          );
        case 'queen':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png" />
            </div>
          );
        case 'rook':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png" />
            </div>
          );
        case 'knight':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png" />
            </div>
          );
        case 'bishop':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png" />
            </div>
          );
        case 'pawn':
          return (
            <div className="piece">
              <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png" />
            </div>
          );
      }
  }
};

export { Piece };
