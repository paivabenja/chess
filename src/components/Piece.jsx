import { Circle } from './Circle';
import '../styles/Piece.css';

const Piece = ({ piece, color }) => {
  switch (piece) {
    case '':
      return;
    case 'circle':
      return <Circle color="black"></Circle>;
    case 'red-circle':
      return <Circle color="red"></Circle>;
    default:
      return (
        <div className='piece'>
          {color} <br /> {piece}
        </div>
      );
  }
};

export { Piece };
