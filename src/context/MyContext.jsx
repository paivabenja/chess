import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [nextPlayer, setNextPlayer] = useState('white');
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <MyContext.Provider
      value={{  columns, rows, nextPlayer, setNextPlayer }}
    >
      {children}
    </MyContext.Provider>
  );
};
