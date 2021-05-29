import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

const LocationList = ({locations, setLocations}) => {
  const handleClick = (type) => {
    fetch(locations.info[type])
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
  };

  const {isLightTheme} = useContext(ThemeContext);

  return (
    <div>
      <table className="table">
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
      <nav className="d-flex justify-content-between mt-2">
        <button onClick={() => handleClick('prev')}
                className={`btn ${isLightTheme ? 'btn-gray' : 'btn-orange'}`}>
          Previous
        </button>
        <span>{locations.info && locations.info.page}</span>
        <button onClick={() => handleClick('next')} className={`btn ${isLightTheme ? 'btn-gray' : 'btn-orange'}`}>
          Next
        </button>
      </nav>
    </div>
  );
};

export default LocationList;
