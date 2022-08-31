import '../styles/Checkboard.css';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { Cell } from './Cell';

const Checkboard = () => {
  const { rows, columns, cleanSelection } = useContext(MyContext);

  const handleSelection = (selectionSetter, selectionGetter, row, column) => {
    //cleanSelection();
    rows.map((arrayRow) => {
      columns.map((arrayColumn) => {
        if (row == arrayRow && column == arrayColumn) {

          console.log('yessir');
          selectionSetter(true);
          return;
        } else if (row != arrayRow || column != arrayColumn) {
          selectionSetter(false);

        }
      });
    });
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
