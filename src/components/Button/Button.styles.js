import styled from 'styled-components';
import {dark, orange} from '../../GlobalStyles';
import Button from './Button';

export const StyledButton = styled(Button)`
  border: 0;
  padding: 8px 16px;
  border-radius: 12px;
  color: #fff;
  background-color: ${(props) => props.dark
          ? dark
          : orange};
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`;
