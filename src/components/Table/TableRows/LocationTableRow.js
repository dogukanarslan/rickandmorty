import { StyledTableRow } from '../Table.styles';

const LocationTableRow = ({ className, locations = [], onRowClick }) =>
  locations.map((row) => (
    <StyledTableRow
      className={className}
      key={row.id}
      onClick={() => onRowClick(`/locations/${row.id}`)}
    >
      <td>{row.name}</td>
      <td>{row.type}</td>
      <td>{row.dimension}</td>
    </StyledTableRow>
  ));

export default LocationTableRow;
