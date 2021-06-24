import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../Button/Button.styles';
import { Nav, NavList, NavItem, NavLogo } from './Navbar.styles';

const Navbar = ({ themeToggler, theme }) => {
  return (
    <Nav>
      <NavList>
        <NavLogo>
          <Link to="/">Rick and Morty</Link>
        </NavLogo>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/">Contact</Link>
        </NavItem>
      </NavList>
      <StyledButton
        label={theme === 'dark' ? 'Dark' : 'Light'}
        onClick={themeToggler}
      />
    </Nav>
  );
};

export default Navbar;
