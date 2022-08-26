import '../styles/Piece.css';

const Piece = ({ position, typeOfPiece, color }) => {
  return (
    <div className='piece'>
      {position}
    </div>
  );
};

export { Piece };
