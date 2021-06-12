const CharacterTableRow = ({ className, characters = [], onRowClick }) =>
  characters.map((row) => (
    <tr
      onClick={() => onRowClick(`/characters/${row.id}`)}
      className={className}
      key={row.id}
    >
      <td>{row.name}</td>
      <td>{row.status}</td>
      <td>{row.species}</td>
      <td>{row.type}</td>
      <td>{row.gender}</td>
    </tr>
  ));

export default CharacterTableRow;
