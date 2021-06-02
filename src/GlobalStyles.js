import styled from 'styled-components';

// Colors
export const dark = '#222';
export const orange = '#fd7e14';
export const gray = '#495057';
export const light = '#efeae1';

// Button
export const Btn = styled.button`
  border: 0;
  padding: 8px 16px;
  border-radius: 12px;
  color: #fff;
  background-color: ${(props) => props.dark ? dark : orange};
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`;
