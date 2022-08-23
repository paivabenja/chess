import { Cell } from './Cell';
import { Circle } from './Circle';
import { Piece } from './Piece';
import '../styles/Row.css';

const Row = ({ row, rowClass }) => {
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  return (
    <div className={rowClass}>
      {columns.map((column, i) => {
        return (
          <Cell key={i} row={row} column={column}>
            <Circle row={row} column={column}></Circle>
            <Piece
              position={row + column}
              typeOfPiece="king"
              color="white"
            ></Piece>
          </Cell>
        );
      })}
    </div>
  );
};

export { Row };
