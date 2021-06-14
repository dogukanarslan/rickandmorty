import { StyledTableRow } from '../Table.styles';

const EpisodeTableRow = ({ className, episodes = [], onRowClick }) =>
  episodes.map((row) => (
    <StyledTableRow
      className={className}
      key={row.id}
      onClick={() => onRowClick(`/episodes/${row.id}`)}
    >
      <td>{row.name}</td>
      <td>{row.air_date}</td>
      <td>{row.episode}</td>
    </StyledTableRow>
  ));

export default EpisodeTableRow;
