import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../contexts/ThemeContext';
import {Btn} from '../GlobalStyles';

const Navbar = () => {
  const {isLightTheme, setIsLightTheme} = useContext(ThemeContext);

  const changeTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <nav className={`${isLightTheme ? 'navbar-light' : 'navbar-dark'}`}>
      <ul className="navbar-menu">
        <li className="navbar-menu-item navbar-menu-logo">
          <Link to="/" className="nav-link">
            Rick and Morty
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/" className="navbar-menu-link">
            Home
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/" className="navbar-menu-link">
            About
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/" className="navbar-menu-link">
            Contact
          </Link>
        </li>
      </ul>
      <Btn dark={!!isLightTheme} onClick={changeTheme}>{isLightTheme ? 'Dark' : 'Light'}</Btn>
    </nav>
  );
};

export default Navbar;
