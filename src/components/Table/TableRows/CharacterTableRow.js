import { StyledTableRow } from '../Table.styles';

const CharacterTableRow = ({ className, characters = [], onRowClick }) =>
  characters.map((row) => (
    <StyledTableRow
      onClick={() => onRowClick(`/characters/${row.id}`)}
      className={className}
      key={row.id}
    >
      <td>{row.name}</td>
      <td>{row.status}</td>
      <td>{row.species}</td>
      <td>{row.type}</td>
      <td>{row.gender}</td>
    </StyledTableRow>
  ));

export default CharacterTableRow;
