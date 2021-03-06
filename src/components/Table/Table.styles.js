import styled from 'styled-components';
import { gray, black, orange } from '../../GlobalStyles';
import Table from './Table';
import TableHead from './TableHead';
import TableBody from './TableBody';

export const StyledTable = styled(Table)`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${black};
  background-color: ${gray};

  & {
    td,
    th {
      border: 1px solid ${black};
      padding: 8px 16px;
    }
  }
`;

export const StyledTableHead = styled(TableHead)`
  border: 1px solid ${black};
  padding: 8px 16px;
  font-weight: bold;
`;

export const StyledTableBody = styled(TableBody)`
  border: 1px solid ${black};
  padding: 8px 16px;
`;

export const StyledTableRow = styled.tr`
  &:hover {
    font-weight: bold;
    color: ${black};
    background-color: ${orange};
    transition: background-color 0.5s;
    cursor: pointer;
  }
`;
