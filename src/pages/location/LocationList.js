const LocationList = ({ locations, setLocations }) => {
  const handleClick = (type) => {
    fetch(locations.info[type])
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
  };

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Dimension</th>
          </tr>
        </thead>
        <tbody>
          {locations.results &&
            locations.results.map((location) => {
              return (
                <tr key={location.id}>
                  <td>{location.name}</td>
                  <td>{location.type}</td>
                  <td>{location.dimension}</td>
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
          <span>{locations.info && locations.info.page}</span>
          <li className="page-item" onClick={() => handleClick('next')}>
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LocationList;
