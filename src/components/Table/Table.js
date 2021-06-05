import {StyledTableBody} from './Table.styles';
import {StyledTableHead} from './Table.styles';

const Table = ({className, headers, tableRow}) => {
  return (
    <table className={className}>
      <StyledTableHead headers={headers}/>
      <StyledTableBody tableRow={tableRow}/>
    </table>
  );
};

export default Table;
