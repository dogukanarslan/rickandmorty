import { useContext } from 'react';
import { api } from '../../constants';
import LocationList from './LocationList';
import Filter from './LocationFilter';
import { LocationContext } from '../../contexts/LocationContext';

const Location = () => {
  const { locations, setLocations } = useContext(LocationContext);
  const getLocations = (filter = '') => {
    fetch(`${api}/location/?${filter}`)
      .then((res) => res.json())
      .then((res) => {
        setLocations(res);
      });
  };

  return (
    <div>
      <Filter getLocations={getLocations} />
      <LocationList locations={locations} setLocations={setLocations} />
    </div>
  );
};

export default Location;
