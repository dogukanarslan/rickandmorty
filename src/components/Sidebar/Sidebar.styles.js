import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dark, orange } from '../../GlobalStyles';

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.dark ? orange : dark)};
  text-align: center;
`;

export const SidebarLink = styled(Link)`
  padding: 10px 15px;
  background-color: ${(props) => {
    return props.dark
      ? props.selected
        ? dark
        : ''
      : props.selected
      ? orange
      : '';
  }};
`;
