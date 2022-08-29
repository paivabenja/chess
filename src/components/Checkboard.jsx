import '../styles/Checkboard.css';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { Cell } from './Cell';

const Checkboard = () => {
  const { rows, columns, cleanSelection } = useContext(MyContext);

  const handleSelection = () => {
    console.log('activated');
    cleanSelection();
  };

  return (
    <div className="checkboard">
      {rows.map((row, i) => (
        <>
          {columns.map((column, j) => {
            return (
              <Cell
                handleSelection={handleSelection}
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
