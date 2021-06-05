const CharacterTableRow = ({className, characters = []}) => (
  characters.map(row => (
    <tr className={className} key={row.id}>
      <td>{row.name}</td>
      <td>{row.status}</td>
      <td>{row.species}</td>
      <td>{row.type}</td>
      <td>{row.gender}</td>
    </tr>
  ))
);

export default CharacterTableRow;
