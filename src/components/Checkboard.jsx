import '../styles/Checkboard.css';
import { Row } from './Row';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const Checkboard = () => {
  const { rows } = useContext(MyContext);

  return (
    <div className="checkboard">
      {rows.map((row, i) => (
        <Row key={i} row={row} rowClass={'row'} />
      ))}
    </div>
  );
};

export { Checkboard };
