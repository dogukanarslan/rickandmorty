import {createContext, useState} from 'react';

export const ThemeContext = createContext({});

const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const light = {
    navbar: 'navbar-light bg-light'
  };

  const dark = {
    navbar: 'navbar-dark bg-dark'
  };

  return (
    <ThemeContext.Provider value={{isLightTheme, setIsLightTheme, dark, light}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
