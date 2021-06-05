const LocationTableRow = ({ className, locations = [] }) =>
  locations.map((row) => (
    <tr className={className} key={row.id}>
      <td>{row.name}</td>
      <td>{row.type}</td>
      <td>{row.dimension}</td>
    </tr>
  ));

export default LocationTableRow;
