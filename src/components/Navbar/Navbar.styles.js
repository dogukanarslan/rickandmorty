import styled from 'styled-components';
import {dark, orange, light} from '../../GlobalStyles';

export const Nav = styled.nav`
  background-color: ${props => props.dark ? orange : dark};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  & + li {
    margin-left: 10px;
  }
`;

export const NavLogo = styled(NavItem)`
  & a {
    color: ${(props) => props.dark ? light : orange};
  }
`;
