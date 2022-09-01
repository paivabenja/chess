import '../styles/Checkboard.css';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { Cell } from './Cell';

const Checkboard = () => {
  const { rows, columns, cleanSelection } = useContext(MyContext);

  return (
    <div className="checkboard">
      {rows.map((row, i) => (
        <>
          {columns.map((column, j) => {
            return (
              <Cell
                key={`${i}${j}`}
                row={row}
                column={column}
              ></Cell>
            );
          })}
        </>
      ))}
    </div>
  );
};

export { Checkboard };
