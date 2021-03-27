const EpisodeList = ({ episodes, setEpisodes }) => {
  const handleClick = (type) => {
    fetch(episodes.info[type])
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data);
      });
  };

  return (
    <div>
      <table className="table table-hover">
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
            <button className="page-link">Previous</button>
          </li>
          <span>{episodes.info && episodes.info.page}</span>
          <li className="page-item" onClick={() => handleClick('next')}>
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default EpisodeList;
