import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../../contexts/ThemeContext';
import {StyledButton} from '../Button/Button.styles';
import {Nav, NavList, NavItem, NavLogo} from './Navbar.styles';

const Navbar = () => {
  const {isLightTheme, setIsLightTheme} = useContext(ThemeContext);

  const changeTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <Nav dark={!!isLightTheme}>
      <NavList>
        <NavLogo dark={!!isLightTheme}>
          <Link to="/">
            Rick and Morty
          </Link>
        </NavLogo>
        <NavItem>
          <Link to="/">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/">
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/">
            Contact
          </Link>
        </NavItem>
      </NavList>
      <StyledButton label={isLightTheme ? 'Dark' : 'Light'} dark={!!isLightTheme} onClick={changeTheme}/>
    </Nav>
  );
};

export default Navbar;
