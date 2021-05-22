import {HashRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import CharacterContextProvider from './contexts/CharacterContext';
import EpisodeContextProvider from './contexts/EpisodeContext';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <CharacterContextProvider>
          <EpisodeContextProvider>
            <Navbar/>
            <Home/>
          </EpisodeContextProvider>
        </CharacterContextProvider>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
