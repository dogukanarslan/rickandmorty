import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledTable } from '../../components/Table/Table.styles';
import { StyledButton } from '../../components/Button/Button.styles';
import EpisodeTableRow from '../../components/Table/TableRows/EpisodeTableRow';

const EpisodeList = ({ episodes, setEpisodes }) => {
  const handleClick = (type) => {
    fetch(episodes.info[type])
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data);
      });
  };

  const { isLightTheme } = useContext(ThemeContext);

  const headers = ['Name', 'Air Date', 'Episode'];

  return (
    <div>
      <StyledTable
        tableRow={<EpisodeTableRow episodes={episodes.results} />}
        headers={headers}
      />
      <nav className="d-flex justify-content-between mt-2">
        <StyledButton
          label="Previous"
          onClick={() => handleClick('prev')}
          dark={!!isLightTheme}
        />
        <span>{episodes.info && episodes.info.page}</span>
        <StyledButton
          label="Next"
          onClick={() => handleClick('next')}
          dark={!!isLightTheme}
        />
      </nav>
    </div>
  );
};

export default EpisodeList;
