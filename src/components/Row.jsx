import { Cell, CellContextProvider } from './Cell';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import '../styles/Row.css';

const Row = ({ row, rowClass }) => {
  const { columns } = useContext(MyContext);

  return (
    <div className={rowClass}>
      {columns.map((column, i) => {
        return (
          <CellContextProvider key={i}>
            <Cell row={row} column={column}></Cell>
          </CellContextProvider>
        );
      })}
    </div>
  );
};

export { Row };
