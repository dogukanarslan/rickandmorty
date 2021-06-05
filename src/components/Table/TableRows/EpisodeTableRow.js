const EpisodeTableRow = ({ className, episodes = [] }) =>
  episodes.map((row) => (
    <tr className={className} key={row.id}>
      <td>{row.name}</td>
      <td>{row.air_date}</td>
      <td>{row.episode}</td>
    </tr>
  ));

export default EpisodeTableRow;
