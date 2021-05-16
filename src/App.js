import {HashRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <Navbar/>
        <Home/>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
