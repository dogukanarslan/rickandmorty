import styled from 'styled-components';
import Pagination from './Pagination';

export const StyledPagination = styled(Pagination)`
  color: ${({ theme }) => theme.paginationColor};
  font-size: 20px;
  font-weight: bold;
`;
