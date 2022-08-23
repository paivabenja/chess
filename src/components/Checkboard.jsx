import '../styles/Checkboard.css';
import { Row } from './Row';

const Checkboard = () => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8];
  rows.reverse();

  return (
    <div className="checkboard">
      {rows.map((row, i) => (
        <Row key={i} row={row} rowClass={'row'} />
      ))}
    </div>
  );
};

export { Checkboard };
