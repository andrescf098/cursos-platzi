import { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <GlobalStateContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
