import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import CharacterContextProvider from './contexts/CharacterContext';
import EpisodeContextProvider from './contexts/EpisodeContext';
import LocationContextProvider from './contexts/LocationContext';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <CharacterContextProvider>
          <EpisodeContextProvider>
            <LocationContextProvider>
              <GlobalStyle />
              <Navbar />
              <Home />
            </LocationContextProvider>
          </EpisodeContextProvider>
        </CharacterContextProvider>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
