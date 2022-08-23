import '../styles/Piece.css';

const Piece = ({ position, typeOfPiece, color }) => {
  return (
    <div className='piece'>
      {typeOfPiece} {color}
    </div>
  );
};

export { Piece };
