import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const handleColor = (color) => {
    if (color == 'white') {
      return 'black';
    } else if (color == 'black') {
      return 'white';
    }
  };

  const [nextPlayer, setNextPlayer] = useState('white');
  const handleTurns = (color) => {
    let nextColor = handleColor(color);
    if (nextPlayer == color) {
      setNextPlayer(nextColor);
      return true;
    } else {
      return false;
    }
  };

  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];

  const cleanSelection = () => {
    console.log('cleanSelection');
  };

  return (
    <MyContext.Provider
      value={{ columns, rows, handleTurns, nextPlayer, cleanSelection }}
    >
      {children}
    </MyContext.Provider>
  );
};
