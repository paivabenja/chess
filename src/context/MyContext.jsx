import { createContext } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children, value }) => {
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return (
    <MyContext.Provider value={{ columns }}>
      {children}
    </MyContext.Provider>
  );
};
