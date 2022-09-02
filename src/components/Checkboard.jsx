import '../styles/Checkboard.css';
import { useContext, React, useState } from 'react';
import { MyContext } from '../context/MyContext';
import { Cell } from './Cell';

const Checkboard = () => {
  const [boardUpdater, setBoardUpdater] = useState(true)
  const { rows, columns } = useContext(MyContext);

  return (
    <div className="checkboard">
      {rows.map((row, i) =>
        columns.map((column, j) => {
          return (
            <Cell
              boardUpdater={boardUpdater}
              setBoardUpdater={setBoardUpdater}
              key={(i, j)}
              row={row}
              column={column}
            ></Cell>
          );
        }),
      )}
    </div>
  );
};

export { Checkboard };
