import { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import CharacterContextProvider from './contexts/CharacterContext';
import EpisodeContextProvider from './contexts/EpisodeContext';
import LocationContextProvider from './contexts/LocationContext';
import { GlobalStyle } from './GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';

function App() {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <CharacterContextProvider>
          <EpisodeContextProvider>
            <LocationContextProvider>
              <GlobalStyle />
              <Navbar themeToggler={themeToggler} />
              <Home />
            </LocationContextProvider>
          </EpisodeContextProvider>
        </CharacterContextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
