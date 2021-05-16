import {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../contexts/ThemeContext';

const Navbar = () => {
  const {isLightTheme, setIsLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const changeTheme = () => {
    setIsLightTheme(!isLightTheme);
  }

  return (
    <nav className={`navbar navbar-expand-lg border-bottom shadow-md ${theme.navbar}`}>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
      <button className={`btn btn-sm ${isLightTheme ? "btn-dark" : "btn-light"}`} onClick={changeTheme}>{isLightTheme ? "Dark" : "Light"}</button>
    </nav>
  );
};

export default Navbar;
