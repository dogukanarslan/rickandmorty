import {HashRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import CharacterContextProvider from './contexts/CharacterContext';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <CharacterContextProvider>
          <Navbar/>
          <Home/>
        </CharacterContextProvider>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
