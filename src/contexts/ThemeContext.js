import {createContext, useState} from 'react';

export const ThemeContext = createContext({});

const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{isLightTheme, setIsLightTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
