import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.navbarBackgroundColor};
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
    color: ${({ theme }) => theme.navLogoColor};
  }
`;
