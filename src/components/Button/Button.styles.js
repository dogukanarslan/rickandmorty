import styled from 'styled-components';
import Button from './Button';

export const StyledButton = styled(Button)`
  border: 0;
  padding: 8px 16px;
  border-radius: 12px;
  color: #fff;
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
