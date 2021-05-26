import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

const EpisodeList = ({ episodes, setEpisodes }) => {
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
      <table className={`table table-hover ${isLightTheme ? 'text-dark' : 'text-light' }`}>
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
      <nav>
        <ul className="pagination d-flex justify-content-between">
          <li className="page-item" onClick={() => handleClick('prev')}>
            <button className={`btn ${isLightTheme ? 'btn-dark' : 'btn-light'}`}>Previous</button>
          </li>
          <span>{episodes.info && episodes.info.page}</span>
          <li className="page-item" onClick={() => handleClick('next')}>
            <button className={`btn ${isLightTheme ? 'btn-dark' : 'btn-light'}`}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default EpisodeList;
