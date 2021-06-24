import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.sidebarBackgroundColor};
  text-align: center;
`;

export const SidebarLink = styled(Link)`
  padding: 10px 15px;
  background-color: ${(props) => {
    return props.selected ? props.theme.sidebarLinkBackgroundColor : '';
  }};
`;
