import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

const EpisodeList = ({episodes, setEpisodes}) => {
  const handleClick = (type) => {
    fetch(episodes.info[type])
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data);
      });
  };

  const {isLightTheme} = useContext(ThemeContext);

  return (
    <div>
      <table className={`table table-hover ${isLightTheme ? 'text-dark' : 'text-light'}`}>
        <thead>
        <tr>
          <th>Name</th>
          <th>Air Date</th>
          <th>Episode</th>
        </tr>
        </thead>
        <tbody>
        {episodes.results &&
        episodes.results.map((episode) => {
          return (
            <tr key={episode.id}>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
              <td>{episode.episode}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
      <nav className="d-flex justify-content-between mt-2">
        <button onClick={() => handleClick('prev')}
                className={`btn ${isLightTheme ? 'btn-gray' : 'btn-orange'}`}>
          Previous
        </button>
        <span>{episodes.info && episodes.info.page}</span>
        <button onClick={() => handleClick('next')} className={`btn ${isLightTheme ? 'btn-gray' : 'btn-orange'}`}>
          Next
        </button>
      </nav>
    </div>
  );
};

export default EpisodeList;
