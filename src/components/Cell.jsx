import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../context/MyContext';
import '../styles/Cell.css';
import { Piece } from './Piece';

const Cell = ({ row, column }) => {
  const { cleanSelection, orderCheckboard } = useContext(MyContext);

  //useEffect
  useEffect(() => {
    orderCheckboard(row, column, setPiece, setPieceColor);
  }, []);

  const [pieceColor, setPieceColor] = useState('');
  const [piece, setPiece] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (!isSelected) {
      console.log('not selected');
      let clean = cleanSelection(row, column);
      if (clean) {
        console.log('cleanSelection true: ');
        setIsSelected(true);
      } else {
        console.log('cleanSelection false: ', clean);
        setIsSelected(false);
      }
      console.log('clean: ', clean);
    } else if (isSelected) {
      setIsSelected(false);
      console.log('selected');
    }
  };

  const handleClassName = (classname = '') => {
    if (isSelected) {
      classname = 'cell selected';
    } else if (!isSelected) {
      classname = 'cell unselected';
    }

    if (row % 2 == 1) {
      classname = classname.concat(' odd');
    } else if (row % 2 == 0) {
      classname = classname.concat(' even');
    }
    return classname;
  };

  return (
    <div
      className={handleClassName() + ' r' + row + ' c' + column}
      id={'cell' + column + row}
      onClick={handleClick}
    >
      <span>{column + row}</span>
      <Piece piece={piece} color={pieceColor}></Piece>
    </div>
  );
};

export { Cell };
