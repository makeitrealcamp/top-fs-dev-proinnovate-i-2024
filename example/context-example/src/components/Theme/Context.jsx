import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('LIGHT');

  const store = {
    state: theme,
    dispatch: setTheme,
  };

  return (
    <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme debe estar dentro del proveedor ThemeProvider');
  }

  return context;
};
